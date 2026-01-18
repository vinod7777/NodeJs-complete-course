const fs = require("fs");
const os = require("os")

console.log("starting");

const data = fs.readFileSync("./test.txt", "utf-8")
console.log(data);

fs.readFile("./test.txt", "utf-8" ,(err,res)=>{
        if(err){
            console.log(err);
            
        }
        console.log(res);
        
})

console.log("end");


