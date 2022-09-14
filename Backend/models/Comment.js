const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  postId: Number,
  id: { type: Number, unique: true },
  name: String,
  email: String,
  body: String,
});

module.exports = mongoose.model("Comment", CommentSchema);
