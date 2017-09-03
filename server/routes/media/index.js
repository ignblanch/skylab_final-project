const express = require('express')
const router = express.Router()

// const passport = require(__base + '/config/passport')

const searchMedia = require('./handlers/searchMedia')
const getDetail = require('./handlers/getDetail')

// router.use( passport.authenticate('jwt', { session: false }) )

router.get('/:title', searchMedia)
router.get('/detail/:imdbID', getDetail)

module.exports = router
