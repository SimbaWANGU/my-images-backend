'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.createImageFromOpenAi = void 0
/* eslint-disable @typescript-eslint/no-var-requires */
const https = require('https')
const createImageFromOpenAi = (prompt, numImages) => {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      model: 'image-alpha-001',
      prompt,
      num_images: numImages,
      size: '1024x1024'
    })
    const options = {
      hostname: 'api.openai.com',
      port: 443,
      path: '/v1/images/generations',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        Authorization: `Bearer ${process.env.MY_API_KEY}`
      }
    }
    const req = https.request(options, (res) => {
      res.on('data', (d) => {
        const response = JSON.parse(d.toString())
        resolve(response.data)
      })
    })
    req.on('error', (error) => {
      reject(error)
    })
    req.write(data)
    req.end()
  })
}
exports.createImageFromOpenAi = createImageFromOpenAi
