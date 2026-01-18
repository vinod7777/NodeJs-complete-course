const express = require('express');
const mongoose  = require('mongoose');
const app = express();  
const User = require('./model/usermodel')
const path = require('path')
app.set("view engine", "ejs")
app.set("views", path.join(__dirname,'views')) 


mongoose.connect('mongodb://localhost:27017/userdb').then(conn => {
    console.log("Connected to MongoDB");
}   ).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});


app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.get('/', async (req, res) => {
    const users = await User.find()
    res.render('index',{users:users});
})




app.listen(7000, () => {
    console.log('http://localhost:7000');
}) 