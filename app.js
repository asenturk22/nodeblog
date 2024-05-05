const path = require('path')
const express = require('express')
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')


const app = express()

const hostname = "127.0.0.1"
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/nodeblog_db')
  .then(() =>  console.log('Connected!'))
  .catch(err => console.error('Connection error:', err))

app.use(fileUpload())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




// View engine setup 
app.engine('handlebars', expressHandlebars.engine({
  handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set('view engine', 'handlebars')
app.set('views', './views')






app.use(express.static("public"))   

const main = require('./routes/main')
app.use('/', main)

const posts = require('./routes/posts')
app.use('/posts', posts)


app.listen(port, hostname,  () => {
    console.log(` Server calisiyor, http://${hostname}:${port}/`)
})
