const express = require('express');

const bookRouter = express.Router();

const { bookmodel } = require("../models/book.model");

//to get all book at a time 

bookRouter.get("/allbook", async (req, res) => {
    try {
        const book = await bookmodel.find();
        res.status(200).send(book);
    } catch (error) {
        res.send(404).send({ "msg": error.message })
    }
})

//to add a book
bookRouter.post("/add", async (req, res) => {
    const payload = req.body;
    const post = new bookmodel(payload);
    await post.save();
    res.send({ "msg": "book added" })
})


//to delete a book
bookRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    await bookmodel.findByIdAndDelete({ _id: id })
    res.send({ "msg": `Book with id ${id} has beenn deleted` })
})

//to get filtered book
bookRouter.get("/Genre",async (req,res)=>{
    const {Genre}=req.query
    try{
        let query={};
        if(Genre){
            query.Genre ={$regex: new RegExp(Genre,"i")};
        }
        const data =await bookmodel.find(query);
        res.send(data);    
    }catch(err){
        console.log(err);
        res.status(400).send({error:"Error"})
    }
})


// to get book accroding to price wise
bookRouter.get("/sort", async (req, res) => {
    try {
        const book = await bookmodel.find({});
        const sort= book.sort((a,b)=>b.Price - a.Price);
        res.status(200).send(book);
        // { "msg": "Book Sorted accroding to price wise" }
    } catch (error) {
        res.send(404).send({ "msg": error.message })
    }
})

module.exports = { bookRouter }