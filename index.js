const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const data = require('./data')

app.use(express.static('public'))

app.engine('mustache', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mustache')

app.get("/", (req, res) => {
  res.render("home", data)
})

app.get("/info.mustache:username")

app.listen(3000, () => {
  console.log('Listening to port 3000!')
})
