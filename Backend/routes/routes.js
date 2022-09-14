const router = require("express").Router();
const {Comments,PostId, GetAllPosts} = require("../controller/controller");

router.get("/posts",GetAllPosts)
router.get("/post/:id",PostId)
router.post("/post/comment/:postId",Comments)

module.exports = router