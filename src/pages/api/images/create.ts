import { imagesControllerPost } from "@/controllers/imagesController"
import type { NextApiRequest, NextApiResponse } from 'next'
import { corsMiddleware } from "../middleware/corsMiddleware"

interface Data {}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  corsMiddleware(req, res, async () => {
    if (req.method === 'POST') {
      await imagesControllerPost(req, res)
    }
  })
}