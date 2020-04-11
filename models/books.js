const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    link: { type: String },
    Date: { type: String, default: Date.now  }
});

const Books = mongoose.model( "Books", BooksSchema);

module.exports = Books;