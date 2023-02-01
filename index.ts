/* eslint-disable @typescript-eslint/no-var-requires */
import { imagesRouter } from './src/routes/images'
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

// *Constants
const app = express()
const port = 3000

// *Middleware
const mongoUrl = process.env.MONGODB_URL as string
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}))

try {
  mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log('MongoDB connected')
} catch (err) {
  console.log(err)
}

// *Routes
app.use('/image', imagesRouter)

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`)
})
