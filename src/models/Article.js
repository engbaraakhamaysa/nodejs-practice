const mongoose = require("mongoose");

//bulid Schimah
const Schema = mongoose.Schema;

//creat new object from class Scheme
const articleSchema = new Schema({
  title: String,
  body: String,
  numberOfLikes: Number,
});

// Article is model is a function have tow params , ptams one : is name a table , params tow is : Schema

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
