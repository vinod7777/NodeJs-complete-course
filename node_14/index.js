const expess = require('express');
const app = expess();
const ejs = require('ejs');
const path = require('path');  

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.use(expess.json());



app.get('/', (req, res) => {   
    res.render('index');
    });


app.listen(3000, () => {
    console.log('http://localhost:3000');
});