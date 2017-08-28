var http = require('request-promise-json')

function getDetail (req, res) {
  const {imdbID} = req.params
  const apiKey = `&apikey=7dbc754c`
  const url = `http://www.omdbapi.com/?i=${imdbID}${apiKey}`
  http.get(url)
  .then((data) => res.json(data))
}

module.exports = getDetail
