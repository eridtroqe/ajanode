const Blog = require("../models/blog");
const fs = require('fs');
const path = require('path');


exports.addBlog = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");

  const blog = new Blog({
      title: req.body.title,
      imagePath: url + "/images/" + req.file.filename,
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

exports.getBlogs = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const blogQuery = Blog.find();
  let fetchedBlogs;
  if (pageSize && currentPage) {
    blogQuery.skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  }
  blogQuery.then(documents => {
    fetchedBlogs = documents;
    return Blog.countDocuments();
  })
    .then(count => {
      res.status(200).json({
        message: "Blogs fetched succesfully",
        blogs: fetchedBlogs,
        blogsCount: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching blogs failed!"
      });
    });
}

exports.getBlog = (req, res, next) => {
  Blog.findById(req.params.id)
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Blog not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching blog failed!"
      });
    });
};