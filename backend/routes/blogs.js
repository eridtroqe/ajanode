const express = require("express");

const BlogController = require("../controllers/blogs");

const checkAuth = require("../middleware/check-auth");
const extractFiles = require("../middleware/file");
const extractFile = require("../middleware/single-file");

const router = express.Router();

router.post("", checkAuth, extractFile, BlogController.addBlog);
router.get("", BlogController.getBlogs);
router.get("/:id", BlogController.getBlog);
// router.get("/last-blog", BlogController.getLastBlog);
router.delete("/:id", checkAuth, BlogController.deleteBlog);
// router.put("/:id", checkAuth, extractFile, PostController.updatePost);


module.exports = router;