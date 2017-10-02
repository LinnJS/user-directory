const express = require('express')
const data = require('./data')
const mustacheExpress = require('mustache-express')
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.engine('mustache', mustacheExpress())
app.set('views', './templates')
app.set('view engine', 'mustache')

app.get('/', (req, res) => {
  res.render('home', data)
})

app.get('/info/:username', (req, res) => {
  let username = req.params.username
  let user = data.users.find(function(person) {
    return person.username === username
  })
  res.render('info', user)
})

app.get('/info.mustache:username')

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}!`)
})
