import { Router } from 'express'
import type { Request, Response } from 'express'
import { createImage, getImages } from '../controllers/images'

const imagesRouter = Router()

imagesRouter.post('/create', (req: Request, res: Response) => {
  createImage(req, res)
    .then(() => {})
    .catch(() => {})
})

imagesRouter.get('/:email', (req: Request, res: Response) => {
  getImages(req, res)
    .then(() => {})
    .catch(() => {})
})

export { imagesRouter }
