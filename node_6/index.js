const http = require("http");
const url = require("url");


const server = http.createServer((req,res, )=>{
    console.log(req.url);
    const custom = url.parse(req.url);
    console.log(custom.query);
    
    switch (req.url) {
        case '/':
            res.end("root")
            break;
        case '/about':
            res.end("about")
            break;
        case '/users':
            res.end("user")
            break;
        default:
            res.end("error")
             
    }
    
})


server.listen(7000,()=>{
    console.log("server started");
    
})