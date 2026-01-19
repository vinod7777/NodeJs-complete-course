
const emp = require('../Model/empmodel');

exports.gethome = async (req, res) => { 
    const emps = await emp.find();  
    res.render('index', { emps });
    }

exports.getnewemp = (req, res) => {   
    res.render('addemploye');
    }

exports.getupdateemp = async (req, res) => {
    const id  = req.params.id;
    const empData = await emp.findById(id);
    res.render('updateemp', { emp: empData });
}

exports.updateemp = async (req, res) => {
    const { id } = req.params;
    const { name, Designation, Salary } = req.body;
    await emp.findByIdAndUpdate(id, { name, Designation, Salary });
    res.redirect('/');
}

exports.postnewemp = async (req, res) => {
     console.log(req.body);
     const { name, Designation, Salary } = req.body;
     const newEmp = await emp.create({
         name,
         Designation: Designation,
         Salary: Salary,
     });
     res.redirect('/');
     
}

exports.deleteemp = async (req, res) => {
    const { id } = req.params;
    await emp.findByIdAndDelete(id);
    res.redirect('/');
}

exports.getsearch = async (req, res) => {
   res.render('search');
}

exports.search = async (req, res) => {  
    const query = req.query.q;
    const results = await emp.find({ name: { $regex: query, $options: 'i' } });
    res.render('search', { results, query });
    
}