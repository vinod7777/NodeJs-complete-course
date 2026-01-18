const fs = require('fs')

// sync
// fs.writeFileSync("./test.txt","hello")

//async
// fs.writeFile("./test.txt","hello" , (err)=>{
//         if(err){
//             console.log(err);
            
//         }
    
// })



//sync 
// const data = fs.readFileSync("./test.txt","utf-8");
// console.log(data);

//async

//fs.readFile("./test.txt","utf-8",(err,res)=>{
//     if(err){
//         console.log(err);      
//     }
//     console.log(res);
// })

// to create the folder
// fs.mkdir('folder-1/a/b/c',{recursive:true}, (err)=>{
//     if(err){
//         console.log(err);
        
//     }
// })

//sync
// fs.appendFileSync("./test.txt","data")

//async

// fs.appendFile("./test.txt"," vinod" , (err)=> {
//     if(err){
//         console.log(err);
        
//     }
// })



//sync 
// console.log(fs.statSync("./test.txt"));


//async

fs.stat("./test.txt",(err,res)=>{
    if(err){
        console.log(err);
        
    }
    console.log(res);
    
})