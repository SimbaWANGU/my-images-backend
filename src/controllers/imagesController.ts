import { NextApiRequest, NextApiResponse } from "next"
import { createImageFromOpenAPI } from "../openai/OpenAIAPI"

const imagesControllerPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const prompt = req.body.prompt
  const numImages = req.body.num_images
  if (prompt.length === 0 || numImages < 1 || numImages > 10) {
    res.status(400).json({
      message: 'Bad Request'
    })
  } else {
    try {
      const data = await createImageFromOpenAPI(prompt, Number(numImages))
      res.status(200).json({
        prompt,
        images: data.data
      })
    } catch (err) {
      res.status(500).json({
        message: 'Server Error'
      })
    }
  }
}

export { imagesControllerPost }
