const express = require('express')
const router = express.Router()

const searchMedia = require('./handlers/searchMedia')
const getDetail = require('./handlers/getDetail')

router.get('/:title', searchMedia)
router.get('/detail/:imdbID', getDetail)

module.exports = router
