const router = require("express").Router();
const { getAllBooks } = require("../controllers/books.controllers");
router.get("/", getAllBooks);

module.exports = router;
