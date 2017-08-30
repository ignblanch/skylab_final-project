const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
// const moment = require('moment')
// global API_KEY = process.env.API_KEY || `&apikey=7dbc754c`
const app = express()

const PORT = process.env.PORT || 3002
const DB_URL = process.env.URL_DB || 'mongodb://localhost:27017/test'

const favoritesRoute = require('./routes/favorites')
const commentsRoute = require('./routes/comments')
const mediaRoute = require('./routes/media')

mongoose.Promise = Promise
mongoose.connect(DB_URL, {useMongoClient: true})

app.set('view engine', 'pug')

app.use(express.static(path.join(process.cwd(), 'client')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/favorites', favoritesRoute)
app.use('/comments', commentsRoute)
app.use('/media', mediaRoute)

// app.locals.moment = moment // this makes the variable available from the pug files

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
