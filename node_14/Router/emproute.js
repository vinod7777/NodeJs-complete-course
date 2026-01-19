const expess = require('express');
const emprouter = expess.Router();
const empcontroller = require('../Controllers/empcontroller');

emprouter.get('/', empcontroller.gethome);
emprouter.route('/new').get(empcontroller.getnewemp).post(empcontroller.postnewemp);
emprouter.route('/edit/:id').get(empcontroller.getupdateemp).put(empcontroller.updateemp);
emprouter.delete('/delete/:id',empcontroller.deleteemp);
emprouter.get('/search', empcontroller.getsearch);
emprouter.get('/emp/search', empcontroller.search);
module.exports = emprouter;
