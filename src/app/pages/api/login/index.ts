import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {
        // Установите куки сессии
        res.setHeader('Set-Cookie', serialize('token', 'authenticated', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60,
        }));
        res.status(200).json({ message: 'Logged in' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
}