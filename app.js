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


app.get('/', (req, res) => {
    res.render('site/index');
})

app.get('/about', (req, res) => {
    res.render('site/about');
})

app.get('/blog', (req, res) => {
    res.render('site/blog');
})

app.get('/contact', (req, res) => {
    res.render('site/contact');
})

app.listen(port, hostname,  () => {
    console.log(` Server calisiyor, http://${hostname}:${port}/`)
})
