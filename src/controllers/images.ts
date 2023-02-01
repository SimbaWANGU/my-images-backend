import type { Request, Response } from 'express'
import { createImageFromOpenAi } from '../api/ImageApiCall'
import { ImageModel } from '../model/Images'

const createImage = async (req: Request, res: Response): Promise<void> => {
  const prompt = req.body.prompt
  const numImages = req.body.num_images
  const email = req.body.email
  if (prompt.length === 0 || numImages < 1 || numImages > 10) {
    res.status(400).json({
      error: 'Bad Request'
    })
  } else {
    createImageFromOpenAi(prompt, Number(numImages))
      .then(async (data: any) => {
        if (typeof email === 'string') {
          console.log(email, data)
          await ImageModel.create({
            email,
            prompt,
            images: data
          })
            .then(() => {
              res.status(201).json({
                success: 'Images Generated'
              })
            })
            .catch(() => {
              res.status(500).json({
                error: 'An error occurred'
              })
            })
        } else {
          console.log(data)
          res.status(201).json({
            success: 'Images Generated',
            images: data
          })
        }
      })
      .catch((err: any) => {
        console.log(err)
      })
  }
}

const getImages = async (req: Request, res: Response): Promise<void> => {
  const email = req.params.email
  const images = await ImageModel.find({
    email
  })
  res.status(200).json({
    images
  })
}

export { createImage, getImages }
