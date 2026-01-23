const expess = require('express');
const app = expess();
const ejs = require('ejs');
const path = require('path');  
// const emprouter = require('./Router/emproute');
const multer = require('multer')
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expess.static(path.join(__dirname, 'static')));



const fileSchema = new mongoose.Schema({
    url: {
        type: String,
    }
})

const file = mongoose.model('file',fileSchema)

const storage = multer.diskStorage({
    destination :'static/upload/images',
    filename: (req,file,cb)=>{
        cb(null,file.originalname)
    }
})


const upload =multer({
    storage:storage,
    fileFilter: (req,file,cb)=>{
        const extName = /jpeg|jpg|png|gif/;
        const isExist =  extName.test(path.extname(file.originalname).toLocaleLowerCase())
        if(isExist){
         return   cb(null,true)
        }else{
            return cb('invalid file type')
        }
    }
})

mongoose.connect('mongodb://localhost:27017/empdb').then(conn => {
    console.log("Connected to MongoDB");
}   ).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});



app.use(bodyparser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/',async (req,res)=>{
    const allFiles = await file.find();

    res.render('index',{images:allFiles});
})

app.get('/upload' ,(req,res)=>{
    res.render('upload');
})

app.post('/upload' , upload.single("singleimage"),async (req,res,next)=>{
    const filepath = req.file.path.replace('static','');
    const isExist = await file.findOne({url :filepath})
    if(isExist){
        return res.status(400).json({message:'image exist'})
    }
    const newImage = await file.create({url:filepath})
    return res.status(201).redirect('/')

})
app.get('/upload/multiple' ,(req,res)=>{
    res.render('uploadmul');
})

app.post('/upload/multiple' , upload.array("multipleFiles"),async (req,res,next)=>{
    if (req.files && req.files.length > 0) {
        const filesToSave = req.files.map((f) => ({ url: f.path.replace('static', '') }));
        await file.insertMany(filesToSave);
    }
    return res.status(201).redirect('/')

})


app.delete('/delete/:id',async (req,res)=>{
    const id = req.params.id;
    await file.findByIdAndDelete(id);
    res.redirect('/')
})





app.listen(3000, () => {
    console.log('http://localhost:3000');
});