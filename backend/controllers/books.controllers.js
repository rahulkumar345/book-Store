const Blogs = require("../models/books.models.js");

const { createBlogs, findAllBlogs } = require("../services/books.services");
const { BlogService } = require("../services/books.services");

const BlogServiceInstance = new BlogService();
const createNewBlog = async (req, res) => {
  // const newBlogDoc = new Blogs(req.body);
  const result = await BlogServiceInstance.create(req.body);
  // const result = await newBlogDoc.save();
  //   console.log(req.body);
  res.status(200).json(result);
};
const getAllBooks = async (req, res) => {
  try {
    const blogs = await BlogServiceInstance.find();
    res.status(200).json(blogs);
  } catch (e) {
    res.status(404).json({ message: "cannnot find", e });
  }
};
const deleteBlogs = async (req, res) => {
  try {
    const deleteId = req.params.id;
    const blogs = await Blogs.findOneAndDelete({ _id: deleteId });
    res.status(200).json(blogs);
  } catch (e) {
    res.status(404).json({ message: "not deleted" });
  }
};
const searchBlogs = async (req, res) => {
  const { title, author } = req.query;
  const result = await Blogs.find({
    $or: [{ title }, { author: { $elemMatch: { email: author } } }],
  });
  res.status(200).json(result);
};
const updateBlogsWithId = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = { _id: id };
    const update = req.body;
    const result = await Blogs.findByIdAndUpdate(filter, update, { new: true });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ message: "not update", e });
  }
};
module.exports = {
  createNewBlog: createNewBlog,
  getAllBooks: getAllBooks,
  deleteBlogs: deleteBlogs,
  searchBlogs: searchBlogs,
  updateBlogsWithId: updateBlogsWithId,
};
