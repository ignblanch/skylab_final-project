const express = require('express')
const router = express.Router()

const addComment = require('./handlers/addComment')
const getCommentsByFilm = require('./handlers/getCommentsByFilm')
const getCommentsByAuthor = require('./handlers/getCommentsByAuthor')
const removeComment = require('./handlers/removeComment')

router.post('/:author/:commentTitle/:stars/:imdbID/:body/:spoiler', addComment)
router.get('/:imdbID', getCommentsByFilm)
router.get('/:author', getCommentsByAuthor)
router.delete('/:id', removeComment)

module.exports = router