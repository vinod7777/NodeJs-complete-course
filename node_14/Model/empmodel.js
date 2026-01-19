const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    name: {
        type: String,
     
    },
    Designation: {
        type: String,
      
    },
    Salary: {
        type: Number,
     
    }

});

const empmodel = mongoose.model('Employee', empSchema);

module.exports = empmodel;