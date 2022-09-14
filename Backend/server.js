const express = require("express");
const mongoose = require("mongoose");
const postRouter =require("./routes/routes")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/test", () => {
  console.log("Database connected");
  app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
  });
});

app.get("/test", (req, res) => {
  res.send("Server Running");
});

app.use('/api',postRouter)