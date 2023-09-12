const Image = require("../models/imageModel");

const handleSaveImage = async (req, res) => {
  try {
    const image = {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    };

    const newImage = new Image({ image });

    await newImage.save();

    res
      .status(200)
      .json({ message: "Image uploaded successfully", payload: newImage });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while uploading the image" });
  }
};

const handleGetImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    if (!Buffer.isBuffer(image.image.data)) {
      return res.status(500).json({ message: "Invalid image data format" });
    }

    res.contentType(image.image.contentType);
    res.send(image.image.data);

    
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while retrieving the image" });
  }
};

module.exports = { handleSaveImage, handleGetImage };
