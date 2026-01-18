const http = require("http");
const url = require("url");


const server = http.createServer((req,res, )=>{
    console.log(req.url);
    const custom = url.parse(req.url);
    console.log(custom.query);
    
    switch (custom.pathname) {
        case '/':
            res.writeHead(200,{"content-type":"text/html"});
            res.end('<h1>hello</h1>');
            break;
        case '/about':
            res.writeHead(200,{"content-type":"text/html"});
            res.end('<h1>about</h1>');
            break;
        case '/users':
            res.writeHead(200,{"content-type":"text/html"});
            res.end('<h1>hello</h1>');
            break;
        default:
            res.end("error")
             
    }
    
})


server.listen(7000,()=>{
    console.log("server started");
    
})