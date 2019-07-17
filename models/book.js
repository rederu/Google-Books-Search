const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new bookSchema({
    title: {
        tupe: String,
        required: true
    },
    authors: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const Book = mongoose.model("Book", boookSchema);

module.exports = Book;