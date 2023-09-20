// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { playlists } from '@/datos';

interface Data {
  playlists: {
    title: string;
    description: string;
    image: string;
  }[];
  focus: {
    title: string;
    description: string;
    image: string;
  }[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ ...playlists });
}
