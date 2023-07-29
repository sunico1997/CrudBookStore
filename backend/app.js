const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://sunico777:November27@cluster0.01bxzxr.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database UwU"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));