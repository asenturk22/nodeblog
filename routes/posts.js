const express = require('express')
const router = express.Router()
const Post  = require("../models/Post")
const path = require('path')

router.get('/new', (req, res) => {
    res.render('site/addpost');
})

router.get('/:id', (req, res) => {
    console.log(req.params)
    Post.findById(req.params.id).then(post => {
        res.render('site/post', {post:post})
    })
})


router.post('/test', (req, res) => {
    
    try { 
        let post_image = req.files.post_image
        post_image.mv(path.resolve(__dirname, '../public/img/post_images', post_image.name))

        Post.create({
            ...req.body, 
            post_image: `/public/img/post_image/${post_image.name}`
        })
        //console.log(req.files.post_image.name)
        res.redirect('/')
    } catch (err) {
        console.err('Post creation err:', err)
    }
})


module.exports = router
