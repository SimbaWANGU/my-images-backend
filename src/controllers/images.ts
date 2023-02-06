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
                success: 'Images Generated',
                images: data
              })
            })
            .catch(() => {
              res.status(500).json({
                error: 'An error occurred'
              })
            })
        } else {
          res.status(201).json({
            success: 'Images Generated',
            images: data
          })
        }
      })
      .catch((err: any) => {
        res.status(500).json({
          error: 'An error occurred',
          message: err.message
        })
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
