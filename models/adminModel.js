const mongoose = require('mongoose');


const adminSchema = mongoose.Schema({
  name: {
    type:String,
    maxlength:100,
    required: true
    },
    email: {
        type:String,
        trim:true,
        unique: 1 
    },
    password: {
        type: String,
        minlength: 5,
        required: true
    },
    role : {
        type:Number,
        default: 0 
    },
    image: String,
    token : {
        type: String,
    },
    tokenExp :{
        type: Number
    }
})

const Admin = mongoose.model('Admin', adminSchema);

module.exports = { Admin }