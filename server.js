const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const imageRouter = require("./routers/imageRouter.js");

const dotenv = require("dotenv");
dotenv.config();
app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.PORT;
const connectDB = require("./db/connect.js");

app.get("/", (req, res)=>{
  res.send("./view/index.html")
})

app.use("/", imageRouter);

app.listen(PORT, async () => {
  console.log(`server is running at http://localhost:${PORT}`);
  await connectDB();
});
