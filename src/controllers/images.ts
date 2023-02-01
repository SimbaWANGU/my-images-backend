import type { Request, Response } from 'express'
import { createImageFromOpenAi } from '../api/ImageApiCall'

const createImage = async (req: Request, res: Response): Promise<void> => {
  const prompt = req.body.prompt
  const numImages = req.body.num_images
  if (prompt.length === 0 || numImages < 1 || numImages > 10) {
    res.status(400).json({
      error: 'Bad Request'
    })
  } else {
    createImageFromOpenAi(prompt, Number(numImages))
      .then((data: any) => {
        console.log('please', data)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }
}

export { createImage }
