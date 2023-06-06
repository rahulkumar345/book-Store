const Blogs = require("../models/books.models");
const findAllBlogs = async () => {
  const result = await Blogs.find({});
  return result;
};
const createBlogs = async (e) => {
  const result = new Blogs(e);
  const res = await result.save();
  return res;
};
class BlogService {
  save = async (doc) => {
    const res = await doc.save();
    return res;
  };
  find = async () => {
    const result = await Blogs.find({});
    return result;
  };
  create = async (e) => {
    const result = new Blogs(e);
    const savedDoc = await this.save(result);
    return savedDoc;
  };
}
module.exports = {
  BlogService,
};
