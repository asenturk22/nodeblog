const mongoose = require('mongoose');
const Post = require('./models/Post');

mongoose.connect('mongodb://127.0.0.1:27017/nodeblog_test_db')
  .then(() => {
    console.log('Connected!');
    return Post.create({
      title: "Benim ilk post basligim",
      content: "Post icerigi, lorem ipsum text"
    });
  })
  .then(post => {
    console.log('Post created:', post);
  })
  .catch(error => {
    console.error('Error:', error);
  });
