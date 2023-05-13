import prisma from '../../../lib/prisma';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const response = await prisma.character.findUnique({
		where: { id: params.character }
	});
	return { character: response };
}
