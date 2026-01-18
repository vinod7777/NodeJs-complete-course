const express = require("express")
const fs = require("fs")
const app = express()
const mongoose = require("mongoose")
const { type } = require("os")
const userRouter = require("./routes/userroutes")



mongoose.connect('mongodb://localhost:27017/userdb', ).then(conn => {
    console.log("Connected to MongoDB");
}   ).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});


app.use(express.json())

app.use('/',userRouter);

app.listen(7000, ()=>{
    console.log("started ");
    console.log("http://localhost:7000/");
     
})