const path = require('path')
const express = require('express')
const app = express()
const hostname = "127.0.0.1"
const port = 3000


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'contact.html'))
})

app.get('/users/:userID/movies/:moviesID', (req, res) => {
    res.send(
        ` 
            <h1> Kullanici Adi : ${req.params.userID}</h1>
            <h1> Movie Adi     : ${req.params.moviesID}</h1>

        
        `
    )
})


app.listen(port, hostname,  () => {
    console.log(` Server calisiyor, http://${hostname}:${port}/`)
})
 

/*
const http = require('http')
const fs = require('fs')


const hostname = "127.0.0.1"
const port = 3000


//Sync : senkron bir şekilde yapıldığı : aynı işin bir defa yapıldığı
//asyn : asenkron birden faza işin yapıldığı 
const indexPage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const notFoundPage = fs.readFileSync('404.html')



const server = http.createServer( (req, res) => {
    if (req.url === "/") {
        return res.end(indexPage)
    } else if (req.url === "/about") {
        return res.end(aboutPage)
    } else if (req.url === "/contact") {
        return res.end(contactPage )
    }  else {
        res.statusCode = 404
        res.end(notFoundPage)
    }
})

server.listen(port, hostname, ()=> {
    console.log(` Server calisiyor, http://${hostname}:${port}/`)
})
*/