const mongoose = require("mongoose");
const url = process.env.DATABASE;  
// // console.log(url)
 
const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;