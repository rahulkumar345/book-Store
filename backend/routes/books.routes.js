const router = require("express").Router();
// const { getCurrencies } = require("../controllers/currencies.controller");
const { createNewBlog } = require("../controllers/books.controllers");
const { deleteBlogs } = require("../controllers/books.controllers");
const { getAllBooks } = require("../controllers/books.controllers");
const {
  searchBlogs,
  updateBlogsWithId,
} = require("../controllers/books.controllers");

router.post("/new", createNewBlog);
router.get("/", getAllBooks);
router.get("/search", searchBlogs);
router.delete("/:id", deleteBlogs);
router.patch("/:id", updateBlogsWithId);
module.exports = router;
