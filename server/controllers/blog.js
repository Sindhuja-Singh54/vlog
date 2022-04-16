const Blog = require("../models/blog");

module.exports.createblog = async (req, res) => {
  try {
    const { title, slug, image, body } = req.body;
    // console.log(req.body);
    const newblog = await new Blog({
      title,
      slug,
      image,
      body,
    }).save();
    res.json(newblog);
  } catch (err) {
    console.log(err);
  }
};


exports.getAllBlog = async (req, res) => {
  try{
    const blogs = await Blog.find({})
    res.json(blogs);
  }catch (err){
    console.log(err);
  }
};

exports.updateBlog = async (req, res) => {
  try{
    let blog;
    blog = await Blog.findById(req.params.id);
    blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false
    });
    res.json(blog);
  }catch (err){
    console.log(err);
  }
};

exports.deleteBlog = async (req, res) => {
  try{
    const blog = await Blog.findById(req.params.id);
	  await blog.remove();
    res.json(	{message: 'Blog Delete Successfully'});
  }catch (err){
    console.log(err);
  }
};

exports.getSingleBlog = async (req, res) => {
  try{
    const blog = await Blog.findById(req.params.id);
	  // await blog.remove();
    res.json(	{blog});
  }catch (err){
    console.log(err);
  }
};

// exports.getSingleBlog = async (req, res) => {
//   const {title } = req.blog;
//   const foundBlog = await Blog.findOne({ title });
//   console.log("FOUND==>>", foundBlog);
//   res.json(foundBlog);
// };

// getallblogs
// getSingleBlog
// updateBlog
// deleteBlog