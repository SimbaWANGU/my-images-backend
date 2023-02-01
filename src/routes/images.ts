import { Router } from 'express'
import type { Request, Response } from 'express'
import { createImage } from '../controllers/images'

const imagesRouter = Router()

imagesRouter.post('/create', (req: Request, res: Response) => {
  createImage(req, res)
    .then(() => {})
    .catch(() => {})
})

export { imagesRouter }
