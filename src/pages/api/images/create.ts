import { imagesControllerPost } from '@/pages/controllers/imagesController'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    await imagesControllerPost(req, res)
  }
}