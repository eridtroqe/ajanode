const express = require("express");

const BlogController = require("../controllers/blogs");

const checkAuth = require("../middleware/check-auth");
const extractFiles = require("../middleware/file");
const extractFile = require("../middleware/single-file");

const router = express.Router();

router.post("", checkAuth, extractFile, BlogController.addBlog);
router.get("", extractFiles, BlogController.getBlogs);
router.get("/:id", BlogController.getBlog);
// router.put("/:id", checkAuth, extractFile, PostController.updatePost);
// router.delete("/:id", checkAuth, PostController.deleteProperty);

module.exports = router;