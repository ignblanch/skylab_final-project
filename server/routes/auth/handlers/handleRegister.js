const User = require('../../../models/User')

function handleRegister (req, res) {
  const { username, password } = req.body

  const user = new User({username})

  User.register(user, password, err => {
    if (err) {
      return res.json({ success: false, msg: 'Sorry. Username already exists.' })
    }
    res.json({ success: true, msg: 'New user created correctly' })
  })
}

module.exports = handleRegister
