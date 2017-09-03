const express = require('express')
const router = express.Router()

// const passport = require(__base + '/config/passport')

const addComment = require('./handlers/addComment')
const getCommentsByFilm = require('./handlers/getCommentsByFilm')
const getCommentsByAuthor = require('./handlers/getCommentsByAuthor')
const removeComment = require('./handlers/removeComment')
const markCommentSpoiler = require('./handlers/markCommentSpoiler')

// router.use( passport.authenticate('jwt', { session: false }) )

router.post('/:author/:commentTitle/:stars/:imdbID/:body/:spoiler', addComment)
router.get('/:imdbID', getCommentsByFilm)
router.get('/author/:author', getCommentsByAuthor)
router.delete('/:id', removeComment)
router.post('/:id', markCommentSpoiler)

module.exports = router
