const http = require("http");

const server = http.createServer((req,res)=>{
    console.log("request from user");
    switch (req.url) {
        case "/":
            res.end("hello")
            break;
        case "/about":
            res.end("hi")
            break;
    
        default:
            res.end("not found")
            break;
    }
    
})

server.listen(7000,()=>{
    console.log("started");
    
})