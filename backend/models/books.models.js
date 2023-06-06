const mongoose = require("mongoose");
const validator = require("validator");

const blogSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    title: { type: String, required: true, unique: true },
    coverImageSrc: {
      type: String,
      required: true,
      validate: (value) => validator.isURL(value),
    },
    rating: {
      type: String,
      required: true,
    },
    genre: { type: [String] },
    price: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
    authorName: { type: String, required: true, unique: true },
    authorId: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);
const blogModel = mongoose.model("Blogs", blogSchema);
module.exports = blogModel;
