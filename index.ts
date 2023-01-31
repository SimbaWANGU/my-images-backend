/* eslint-disable @typescript-eslint/no-var-requires */
import type { Request, Response } from 'express'
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = 3000

// *Middleware
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(session({
  resave: false,
  saveUninitialized: false
}))

// *Routes
app.use('/', (req: Request, res: Response) => {
  res.json({
    hello: 'Welcome to the app'
  })
})

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`)
})
