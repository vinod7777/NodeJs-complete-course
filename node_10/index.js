const express = require("express")
const fs = require("fs")
const app = express()

const { type } = require("os")





app.use(express.json())

app.use((req,res,next)=>{
    console.log("middleware");
    next()
    
})

app.get("/" ,(req,res) =>{
    //  fetch("https://api.restful-api.dev/objects").then(res=>res.json()).then(json=>console.log(json))
    return res.end('<h1>hiii</h1>')
    
})

app.get('/about', (req,res)=>{
    console.log(req.header);
    
    let data = fs.readFileSync('data.json', 'utf-8')
    data = JSON.parse(data)
  
    res.json(data)
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

app.post('/about', (req,res)=>{
    const user = req.body;
    let data = fs.readFileSync('data.json', 'utf-8')
    data = JSON.parse(data)
    data.push({...user, id: data.length + 1})
    fs.writeFileSync('data.json', JSON.stringify(data))
    res.json({message: "data added successfully"})
})


app.listen(7000, ()=>{
    console.log("started ");
    console.log("http://localhost:7000/");
     
})