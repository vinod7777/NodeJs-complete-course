const user = require("../model/usermodel")

exports.getAbout = async (req,res)=>{
    // C R U D  READ
    console.log(req.header);
    const id = req.body;
    const  result = await user.find({},{}) //all
    // const result = await user.findById(id)
    // const  result = await user.find({name:id},{name:1,_id:0}) 
    // const result = await user.findOne();
    res.json({user: result})
}


exports.postAbout = async (req,res)=>{
    const data = req.body;
    const result =  await user.create(data)
    res.json({message: "data added successfully",result})
}

exports.patchAbout = async (req,res)=>{
    const id = req.params.id
    console.log(id);
    
    const result = await user.findByIdAndUpdate(id,{name:"chinna"},{new : true})
    console.log(result);
    res.json({message:"updated "})
    
}

exports.deleteAbout = async (req,res)=>{
    const id = req.params.id
    const result = await user.findByIdAndDelete(id)
    console.log(result);
    res.json({message:"deleted "})
    
}

