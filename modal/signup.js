const mongoose=require("mongoose")

const signupSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true, 
      
        

    },

    phoneNumber:{
        type:Number,
        required:true,
        unique:true


    },
    email:{
        type:String,
        
        
    },
    password:{
        type:String,
        required:true,
       

    },

})
const signup=new mongoose.model('signup',signupSchema)
module.exports=signup
