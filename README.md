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


### Express te "static" dosyalarin sunulmasi

- resim dosyalari, 
- css dosyalari
- javascript dosyalarinin  middleware  built-in fonksiyonlar aracaligi ile sunulmasi. 


```
app.use(express.static('public'))
```

bu komutu girdikten sonra, projemizde public isminde klasor olusturuyoruz ve ardindna css klasoru icerisine style.css dosyasini ekliyoruz.  Projde ki dosya organizasyonu acisindan daha duzenli hale getiriliyor. 

### express-handlebars  templates 

//aciklama eklenecek

```
$ npm install express-handlebars
```


```
import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('site2\index');
});

app.listen(3000);
```


### mongoose download 

MongoDB NoSql veritabani ile haberlesebilmesi icin "mongoose" paketinin npm paket yukleyicisi ile yuklanmesi. 

```
$ npm install mongoose
```