// Bagimliliklari tanimlamak ve mongoose iceri aktarmak
const mongoose = require('mongoose');
const Post = require('./models/Post');
const fs = require('fs/promises');  //Dosya islemleri icin fs modulunu ice aktar. 

//Kontrol bayragi dosya yolunu tanimla
let flagFilePath = './postCreated.flag'; 

// Veritabanina baglanmak 
mongoose.connect('mongodb://127.0.0.1:27017/nodeblog_test_db')
    .then( () => {
        console.log('Connected to mongoDB!')
        // return createPost()
    })


    // Sonuclari isleme
    .then(post => {
        console.log('Post created:', post);
    })
    
    // Tum kayitlari getir. 
    .then( () => {
        //return findPost()
    })

    // Id' ye gore kayit guncelleme    
    .then( () => {
        /*
        return updateByIdPost("662d4aff4543364dfaa6cf65", {
            title: 'Benim 2. postum'
        })
        */
    })

    // Id' ye gore kayit silme
    .then( () => {
        return deleteByIdPost("662de5b73a7e98fed230cd73")
    })
    

    // Olasi hatalar ele alinir ve kullaniciya geri bildirim saglanir. 
    .catch(error => {
        console.error('Error:', error);
    });

  
function createPost() {
    return Post.create({
        title: "Benim ilk post basligim",
        content: "Post icerigi, lorem ipsum text"
    })
} 

function findPost() {
    return Post.find({})
}

function updateByIdPost(id, updateObj) {
    return Post.findByIdAndUpdate(id, updateObj)
}

function deleteByIdPost(id) {
    return Post.findByIdAndDelete(id)
}