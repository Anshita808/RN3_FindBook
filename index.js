const express = require("express");
const { connection } = require("mongoose");
const cors = require("cors");
const { myBookRouter } = require("./routes/Books.routes");

const app = express();
app.use(express.json());
app.use(cors())

app.use("/book",myBookRouter)

app.listen(8080,async()=>{
    try {
        await connection
        console.log("connected to Db");
    } catch (error) {
        console.log(error);
    }
    console.log("Server is running");
})