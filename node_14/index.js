const expess = require('express');
const app = expess();
const ejs = require('ejs');
const path = require('path');  
const emprouter = require('./Router/emproute');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expess.static(path.join(__dirname, 'static')));
app.use('/edit', expess.static(path.join(__dirname, 'static')));
app.use('/emp/search', expess.static(path.join(__dirname, 'static')));
mongoose.connect('mongodb://localhost:27017/empdb').then(conn => {
    console.log("Connected to MongoDB");
}   ).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});



app.use(bodyparser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/', emprouter);





app.listen(3000, () => {
    console.log('http://localhost:3000');
});