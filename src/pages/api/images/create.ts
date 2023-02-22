import { imagesControllerPost } from '@/controllers/imagesController'
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    imagesControllerPost(req, res)
  }
}