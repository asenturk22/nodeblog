const express = require('express')
const router = express.Router()
const Post  = require("../models/Post")

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
        Post.create(req.body)
        res.redirect('/')
    } catch (err) {
        console.err('Post creation err:', err)
    }
})


module.exports = router
