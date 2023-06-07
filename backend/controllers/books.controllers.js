const Blogs = require("../models/books.models.js");

const { BlogService } = require("../services/books.services");

const BlogServiceInstance = new BlogService();
const getAllBooks = async (req, res) => {
  try {
    const blogs = await BlogServiceInstance.find();
    res.status(200).json(blogs);
  } catch (e) {
    res.status(404).json({ message: "cannnot find", e });
  }
};
module.exports = {
  getAllBooks: getAllBooks,
};
