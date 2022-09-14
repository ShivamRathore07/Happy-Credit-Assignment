const Post = require("../models/Post");
const comment = require("../models/comment");

module.exports.GetAllPosts = async (req,res)=>{
  try {
    const posts = await Post.find()
    res.status(200).json({ success: true, data: posts })
    
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports.PostId =  async (req, res) => {
    const { id } = req.params;
  
    const posts = await Post.aggregate([
      { $match: { id: Number(id) } },
      {
        $lookup: {
          localField: "id",
          foreignField: "postId",
          as: "comments",
          from: "comments",
        },
      },
    ]);
  
    res.status(200).json({ success: true, data: posts });
  }
  
module.exports.Comments = async (req, res) => {
const { postId } = req.params;
const { body, name, email } = req.body;

const post = await Post.findOne({ id: Number(postId) });

if (!post) {
    res.status(404).json({ success: false, msg: "Post does not exists." });
} else {
    const newComment = new comment({
    postId,
    name,
    email,
    body,
    id: Math.floor(Math.random() * 10),
    });
    await newComment.save();

    res.status(201).json({ success: true, data: newComment });
}
}