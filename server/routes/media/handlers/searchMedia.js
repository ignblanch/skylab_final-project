var http = require('request-promise-json')

function searchMedia (req, res) {
  const {title} = req.params
  const apiKey = `&apikey=7dbc754c`
  const url = `http://www.omdbapi.com/?s=${title}${apiKey}`
  http.get(url)
  .then((data) => res.json(data))
}

module.exports = searchMedia
