const mongoose=require("mongoose")

const adminSchema=new mongoose.Schema({
    emailID:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:5,

    },
})

const admin=new mongoose.model('admin',adminSchema)
module.exports=adminSchema