/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  prompt: {
    type: String,
    required: true,
    length: 30
  },
  images: {
    type: Array,
    require: true,
    length: 10
  },
  createdAt: {
    type: Date,
    expires: 7200
  }
})

const ImageModel = mongoose.model('Images', ImageSchema)

export { ImageModel }
