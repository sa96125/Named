import { sign } from 'jsonwebtoken';
import PrismaClient from "$lib/prisma"

const prisma = new PrismaClient();

export const post = async ({ request }) => {
	const data = await request.formData();

	const user = await prisma.user.findUnique({
		where: {
		  email: data.get('email'),
		}
	})

	if(!user) {
		return {
			status: 404,
			headers: {
				Location: '/login'
			},
			body: 'account is not available'
		};
	}

	// TODO: check password
	// - !passwordCorrect  return incorrect error.

	// TODO: return JWT(id)
	const jwt = sign(user.uid, import.meta.env.VITE_SECRET_KEY);
	return {
		status: 302,
		headers: {
			'set-cookie': `jwt=${jwt}; Path=/; HttpOnly`,
			Location: '/'
		},
		body: {
			ok: true
		}
	};
};
