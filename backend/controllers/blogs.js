const Blog = require("../models/blog");
const fs = require('fs');
const path = require('path');


exports.addBlog = (req, res, next) => {
  console.log('req add ', req.body);
  const blog = new Blog({
      title: req.body.title,
      content: req.body.content
  })

  blog.save().then(createdPost => {
    res.status(201).json({
      message: "Blog added succesfully!",
    });
  })
    .catch(error => {
      res.status(500).json({
        message: "Creation blog failed!"
      });
    });
};
