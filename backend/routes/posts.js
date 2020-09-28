const express = require("express");

const PostController = require("../controllers/posts");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");
const uploadS3img = require("../services/upload-s3");

const router = express.Router();

router.post("", checkAuth, uploadS3img.array('imagePath', 10), PostController.addProperty);
router.put("/:id", checkAuth, uploadS3img.array('imagePath', 10), PostController.updatePost);
router.delete("/:id", checkAuth, PostController.deleteProperty);
router.get("", PostController.getPropertys);
router.get("/:id", PostController.getProperty);

module.exports = router;
