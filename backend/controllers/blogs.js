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
  const blogQuery = Blog.find().sort({ createdAt: 'desc' });
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

exports.getLastBlog = (req, res, next) => {
  Blog.find({})
  .sort({ createdAt: 'desc' })
  .limit(1)
  .then(post => {
    if (post) {
      res.status(200).json(post[0]);
    } else {
      res.status(404).json({ message: "Blog not found!" });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: "Fetching last blog failed!"
    });
  });
};

exports.deleteBlog = (req, res, next) => {
  Blog.deleteOne({ _id: req.params.id })
    .then(result => {
      console.log(result);
      if (result.n > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Deleting posts failed!"
      });
    });
};