const express = require('express')
// const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
// const moment = require('moment')

const app = express()

const PORT = process.env.PORT || 3002
// const URL_DB = 'mongodb://localhost:27017/test'

// const routesTasks = require('./routes/tasks')
// const routesTask = require('./routes/task')
// const routeCompleted = require('./routes/completed')

// mongoose.Promise = Promise
// mongoose.connect(URL_DB, {useMongoClient: true})

app.set('view engine', 'pug')

app.use(express.static(path.join(process.cwd(), 'client')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use('/tasks', routesTasks)
// app.use('/task', routesTask)
// app.use('/completed', routeCompleted)

// app.locals.moment = moment // this makes the variable available from the pug files

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
