const express = require("express");
const { BooksModel } = require("../models/book.models");


const myBookRouter = express.Router();

myBookRouter.post("/add",async(req,res)=>{
    try {
        const {title,author,image,genre,description,price} = req.body;
        const newBook = new BooksModel({
            title,author,image,description,price
        })
        const addBooks = await newBook.save();
        res.status(200).send({msg:"Your Book is Added Successfully",addBooks})
    } catch (error) {
        res.status(400).send({msg:"Some Error Occuring"});
    }
})

myBookRouter.get("/getbook",async(req,res)=>{
    try {
        const book = await BooksModel.find()
        res.status(200).send({msg:"All Books are Collected",book})
    } catch (error) {
        res.status(400).send({msg:"Some Error Occuring"})
    }
})
myBookRouter.delete("deletebook/:id",async(req,res)=>{
    try {
        const {id} = req.params
        await BooksModel.findByIdAndDelete(id)
        res.status(200).send({msg:"Book is Deleted Successfully."})
    } catch (error) {
        res.status(400).send({msg:"Some Error Occuring"});
    }
})
myBookRouter.get("/genre/:genre",async(req,res)=>{
    try {
        const {genre} = req.params;
        const book = await BooksModel.find({genre});
        res.status(200).send({msg:"Your Books is Filtered",book})
    } catch (error) {
        res.status(400).send({msg:"Some Error Occuring"});
    }
});
myBookRouter.get("/sort/:books",async(req,res)=>{
    try {
        const {books} = req.params;
        const sorted = books === "asc" ? 1 : -1
        const book = await BooksModel.find().sort({price:sorted});
        res.status(200).send({msg:"Your Books is Sorted",book});
    } catch (error) {
        res.status(400).send({msg:"Some Error Occuring"});
    }
})

module.exports = {myBookRouter}