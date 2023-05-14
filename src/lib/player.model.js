import prisma from './prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

const createPlayer = async (email, password) => {
	const player = await prisma.player.findUnique({
		where: { email }
	});
	if (player) {
		return { error: 'Player already exists.' };
	}
	try {
		const player = await prisma.player.create({
			data: {
				email,
				password: await bcrypt.hash(password, 10)
			}
		});
	} catch (error) {
		return { error: 'Unable to create player.' };
	}
};

const loginPlayer = async (email, password) => {
	const player = await prisma.player.findUnique({
		where: {
			email
		}
	});
	if (!user) {
		return {
			error: 'Invalid credentials.'
		};
	}
	const passwordIsValid = await bcrypt.compare(password, player.password);
	if (!passwordIsValid) {
		return { error: 'Invalid credentials.' };
	}
	const jwtPlayer = {
		id: player.id,
		email: player.email
	};
	const token = jwt.sign(jwtPlayer, JWT_SECRET, {
		expiresIn: '1d'
	});
	return { token };
};

export { createPlayer, loginPlayer };
