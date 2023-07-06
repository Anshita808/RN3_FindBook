const express=require('express')
require("dotenv").config()
const cors=require('cors');
const {connection}=require("./config/db.js")
const {bookRouter}=require("./routes/book.route.js");

const app=express()

app.use(express.json());
app.use(cors());
app.use("/book",bookRouter);

app.listen(process.env.port,async()=>{
  try {
    await connection
    console.log("Connect to the database")
  } catch (error) {
    console.log(error)
    
  }
  console.log(`Server is running at port no ${process.env.port}`);

})