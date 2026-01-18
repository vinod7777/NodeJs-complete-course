const express = require("express")
const fs = require("fs")
const app = express()
const mongoose = require("mongoose")
const { type } = require("os")


const userSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    age:{
        type: Number,
    },
});

const user = mongoose.model('user',userSchema)

mongoose.connect('mongodb://localhost:27017/userdb', ).then(conn => {
    console.log("Connected to MongoDB");
}   ).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});





app.use(express.json())

app.use((req,res,next)=>{
    console.log("middleware");
    next()
    
})

app.get("/" ,(req,res) =>{
    //  fetch("https://api.restful-api.dev/objects").then(res=>res.json()).then(json=>console.log(json))
    return res.end('<h1>hiii</h1>')
    
})

app.get('/about',async (req,res)=>{
    // C R U D  READ
    console.log(req.header);
    const id = req.body;
    const  result = await user.find({},{}) //all
    // const result = await user.findById(id)
    // const  result = await user.find({name:id},{name:1,_id:0}) 
    // const result = await user.findOne();
    res.json({user: result})
})

app.get('/about/:id', (req,res)=>{
    console.log(req.params);
    
    const id = req.params.id *1 ;
    let data = fs.readFileSync('data.json', 'utf-8')
    data = JSON.parse(data)
    let user = data.find(user => user.id == id);
    console.log(user);
    res.json(user)

})

app.post('/about', async (req,res)=>{
    const data = req.body;
    const result =  await user.create(data)
    res.json({message: "data added successfully",result})
})

app.patch('/about/:id',async (req,res)=>{
    const id = req.params.id
    const result = await user.findByIdAndUpdate(id,{name:"chinna"},{new : true})
    console.log(result);
    res.json({message:"updated "})
    
})

app.delete('/about/:id',async (req,res)=>{
    const id = req.params.id
    const result = await user.findByIdAndDelete(id)
    console.log(result);
    res.json({message:"deleted "})
    
})


app.listen(7000, ()=>{
    console.log("started ");
    console.log("http://localhost:7000/");
     
})