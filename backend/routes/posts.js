const express = require("express");

const PostController = require("../controllers/posts");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();

router.post("", checkAuth, extractFile, PostController.addProperty);
router.put("/:id", checkAuth, extractFile, PostController.updatePost);
router.delete("/:id", checkAuth, PostController.deleteProperty);
router.get("", extractFile, PostController.getPropertys);
router.get("/:id", PostController.getProperty);

module.exports = router;
