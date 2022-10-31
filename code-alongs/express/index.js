// import our libraries and setup express
const express = require('express')
const morgan = require('morgan')
const { request, response } = require('express')
const app = express()

// morgan is a logger for express to help with debugging
app.use(morgan('dev'))
app.use(express.json())

// create router for express app
const indexRoute = express.Router()

indexRoute.route('/').get((request, response, next ) => {
  console.log('Is this thing on?')
  next()
  },(request, response, next) => {
  return response.json({status: 200, message: 'This thing is on!', data: null})
  }
  )

app.use('/apis', indexRoute)

app.listen(4200)