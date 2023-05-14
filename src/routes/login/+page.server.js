import { fail, redirect } from '@sveltejs/kit';
import { loginPlayer } from '../../lib/player.model';

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	const player = event.locals.user;
	if (player) {
		throw redirect(302, '/guarded');
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		if (!formData.email || !formData.password) {
			return fail(400, {
				error: 'Missing credentials.'
			});
		}
		const { email, password } = formData;
		const { error, token } = await loginPlayer(email, password);
		if (error) {
			return fail(401, {
				error
			});
		}
		event.cookies.set('AutherizationToken', `Bearer ${token}`, {
			httpOnly: true,
			path: '/',
			secure: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24
		});
		throw redirect(302, '/dashboard');
	}
};
