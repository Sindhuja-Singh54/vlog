const { createblog, getAllBlog, getSingleBlog, updateBlog, deleteBlog } = require("../controllers/blog");

const router = require("express").Router();

router.post("/create-blog", createblog);
router.get("/all-blog", getAllBlog);
router.put("/update-blog/:id",updateBlog);
router.delete("/delete-blog/:id",deleteBlog);
router.get("/single-blog/:id",getSingleBlog);

module.exports = router;