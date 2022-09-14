const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  userId: Number,
  id: { type: Number, unique: true },
  title: String,
  body: String,
});

module.exports = mongoose.model("Post", PostSchema);
