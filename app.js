const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')


const app = express()

const hostname = "127.0.0.1"
const port = 3000


// View engine setup 
app.set('view engine', 'handlebars')
app.engine('handlebars', handlebars.engine())
app.set('views', './views')

 app.use(express.static("public"))   

const main = require('./routes/main')
app.use('/', main)


app.listen(port, hostname,  () => {
    console.log(` Server calisiyor, http://${hostname}:${port}/`)
})
