const express = require("express")

const app = express()

app.get("/" ,(req,res) =>{
    //  fetch("https://api.restful-api.dev/objects").then(res=>res.json()).then(json=>console.log(json))
    return res.end('<h1>hiii</h1>')
    
})

app.get('/about', (req,res)=>{
    return res.end(`<h1>${req.query.name}</h1>`)
})

app.listen(7000, ()=>{
    console.log("started ");
    console.log("http://localhost:7000/");
     
})