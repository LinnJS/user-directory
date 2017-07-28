const express = require('express')
const data = require('./data')
const mustacheExpress = require('mustache-express')
const app = express()

app.use(express.static('public'))
app.engine('mustache', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mustache')

app.get("/", (req, res) => {
  res.render("home", data)
})

app.get("/info/:username", (req, res) => {
  let username = req.params.username
  let user = data.users.find(function(person) {
    return person.username === username
  })
  res.render("info", user)
})

app.get("/info.mustache:username")

app.listen(3000, () => {
  console.log('Listening to port 3000!')
})
