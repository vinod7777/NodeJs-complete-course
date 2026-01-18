const http = require("http");
const fs = require("fs")
const url = require("url");
const productreplace = require("./modules/productreplace");
const overviewreplace = require("./modules/overviewreplace");



const indexHtml = fs.readFileSync(`${__dirname}/templates/index.html`,"utf-8");
const overviewHtml = fs.readFileSync(`${__dirname}/templates/overview.html`,"utf-8");
const productHtml = fs.readFileSync(`${__dirname}/templates/product.html`,"utf-8");

let  productData = fs.readFileSync(`${__dirname}/data.json`, "utf-8");



productData = JSON.parse(productData);

 

const server = http.createServer((req,res)=>{
    const{ pathname,query} = url.parse(req.url,true)
   
    
    if(pathname ==  '/'){
        res.writeHead(200,{"content-type":"text/html"})
    const cardHtml = productData.map((product,index) =>productreplace(productHtml,product,index)).join('')
    let output = indexHtml.replace(/{%product%}/g,cardHtml)
        res.end(output);
    }else if(pathname == '/product'){
        res.writeHead(200,{"content-type":"text/html"})
        const product = productData[query.id - 1]
        let output = overviewreplace(overviewHtml,product)
        res.end(output)
        
    }else{
        res.end('<h1>not found</h1>')
    }
     
    
    


})

server.listen(7000,()=>{
    console.log("strarted");
    
})