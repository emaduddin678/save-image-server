const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
 image:{
  data: Buffer,
  contentType: String
 }
});



const Image = mongoose.model("imageModel", imageSchema);
module.exports = Image;
