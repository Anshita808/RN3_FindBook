const mongoose = require("mongoose");

const BooksSchema = mongoose.Schema({
    title: {type:String, require:true},
    author: {type:String, require:true},
    genre: {type:String, require:true},
    description:{type:String, require:true},
    price:{type:Number, require:true}
});

const BooksModel = mongoose.model("findbooks",BooksSchema)

module.exports = {BooksModel}