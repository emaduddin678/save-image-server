const express = require("express");
const imageRouter = express.Router();
const {
  handleSaveImage,
  handleGetImage,
} = require("../controller/imageController");
const upload = require("../middleware/imageUpload");

imageRouter.post("/upload", upload.single("testImage"), handleSaveImage);
imageRouter.get("/images/:id", handleGetImage);

module.exports = imageRouter;
