const routes = require('express').Router();
const path = require('path')


routes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/index.html'))
})

/// Error handling, if a route does not exist default to the home page.
routes.get('*', (req, res) => {
  res.status(404)
})

module.exports = routes;