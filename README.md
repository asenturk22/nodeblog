# Node.JS  ile Blog Yapımı

- **Javascript** [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 
- **Node.JS** [NodeJS](https://nodejs.org/en)
- **npm** : [NPM](https://www.npmjs.com/)  
- **Express.js**
- MongoDB
- body-parser
- Handlebars Template Engine
- express-fileupload
- method-override
- session
- moment
- mongopose


### express.js Installation

```shell
$ npm init # ilk defa paket yuklenecekse calistirilacak
$ npm install express
```


Versiyon Numaralandirma bilgi verilecek. 

```
  "dependencies": {
    "express": "^4.19.2"
  }
```


### nodemon Installation
nodemon'nun geliştirme modunu indirelim. Bu paket node.js de her değişiklik yapıldığında  NodeJS server'ı otomatik kapatip tekrardan bizim icin baslatacaktr. 

```shell
$ npm install nodemon --save-dev
```

Ancak her NodeJS projesinde ihtiyaç olacağından nodemon paketinn global olarak bilgisayarimiza indiriyoruz. 

```shell
$ npm install -g nodemon 
```

Kullanimi : 

```shell
$ nodemon app.js 
```

ile nodemon baslatilmaktadir. app.js dosyasinda yapilan degisiklikler kaydedildiginde nodemon bu degisiklikleri bildigi icin node.js server'i kapatik tekrardan bizim icin acacaktir. 


### server'in express.js kullanilarak olusturulmasi

[hello-world](https://expressjs.com/en/starter/hello-world.html)

``` shell
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

```