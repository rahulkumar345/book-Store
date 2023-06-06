require("dotenv").config();
const express = require("express");
const cors = require("cors");

const bookRoutes = require("./routes/books.routes");
const { authMiddleware } = require("./middleware/auth.middleware");
// const { validateMiddleware } = require("./middlewares/validators");
const mongoose = require("mongoose");

const app = express();
const PORT = 8082;
const DB_URI = "mongodb://127.0.0.1:27017/bookCollection";
mongoose
  .connect(`${DB_URI}`)
  .then(() => {
    console.log("connected to database", DB_URI);
    app.listen(PORT, () => {
      console.log("Listening....", PORT);
    });
  })
  .catch(() => {
    console.log("not connected to database");
  });

app.use(express.json());
app.use(cors());
app.use(authMiddleware);

app.use("/blogs", bookRoutes);
