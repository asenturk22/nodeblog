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
