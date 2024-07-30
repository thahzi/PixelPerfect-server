const mongoose = require('mongoose')

const userSchema =  new mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
    },
    title:{
        type:String
    },
    description:{
        type:String
    }


})

const users = mongoose.model("users" , userSchema)

module.exports = users