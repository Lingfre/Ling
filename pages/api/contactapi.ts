import { NextApiRequest, NextApiResponse } from 'next';
import {db} from '@/config/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    try {
      if (!name ||!email) {
        return res.status(400).json({ message: 'All fields are required.' });
      }

      const query = `INSERT INTO users (name, email) VALUES (?, ?, ?)`;
      const values = [name,  email];
      await db.execute(query, values);

      return res.status(201).json({ message: 'User successfully created!' });
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Database error. Please try again later.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}