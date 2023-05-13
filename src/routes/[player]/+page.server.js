import prisma from '../../lib/prisma';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const response = await prisma.character.findMany({
		where: { playerId: params.player }
	});
	return { characters: response };
}