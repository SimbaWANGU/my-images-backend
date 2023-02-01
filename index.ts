/* eslint-disable @typescript-eslint/no-var-requires */
import { imagesRouter } from './src/routes/images'
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

// *Constants
const app = express()
const port = 3000

// *Middleware
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}))

// *Routes
app.use('/image', imagesRouter)

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`)
})
