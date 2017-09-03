const express = require('express')
const router = express.Router()

const passport = require('../../config/passport')

const handleRegister = require('./handlers/handleRegister')
const handleLogin = require('./handlers/handleLogin')

router.post('/register', handleRegister)
router.post('/login', passport.authenticate('local', { session: false }), handleLogin)

module.exports = router
