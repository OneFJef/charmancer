import prisma from '../lib/prisma';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const response = await prisma.player.findMany();
	return { players: response };
}
