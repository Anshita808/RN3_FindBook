const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    Title:String,
    Author:String,
    Genre :String,
    Description :String,
    Price:Number,
})

const bookmodel = mongoose.model('Book',bookSchema);

module.exports ={bookmodel}