const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
// const moment = require('moment')

const app = express()

const PORT = process.env.PORT || 3002
const URL_DB = process.env.URL_DB || 'mongodb://localhost:27017/test'
// const API_KEY = process.env.API_KEY || `&apikey=7dbc754c`

const favoritesRoute = require('./routes/favorites')
const commentsRoute = require('./routes/comments')

mongoose.Promise = Promise
mongoose.connect(URL_DB, {useMongoClient: true})

app.set('view engine', 'pug')

app.use(express.static(path.join(process.cwd(), 'client')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/favorites', favoritesRoute)
app.use('/comments', commentsRoute)

// app.locals.moment = moment // this makes the variable available from the pug files
// app.locals.API_KEY = API_KEY

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
