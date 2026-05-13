const express = require("express");

const router = express.Router();

const upload = require("../middleware/multerMiddleware");

const {
  uploadFile,
  getFiles,
  deleteFile,
} = require("../controllers/uploadController");


// Upload API
router.post(
  "/upload",
  upload.single("file"),
  uploadFile
);


// Get Files API
router.get("/files", getFiles);


// Delete File API
router.delete("/files/:name", deleteFile);


module.exports = router;