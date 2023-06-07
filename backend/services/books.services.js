const Blogs = require("../models/books.models");

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
