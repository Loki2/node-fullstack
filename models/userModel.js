const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  name: {
    type:String,
    maxlength:100,
    required: true
    }, 
    lastname: {
      type:String,
      maxlength: 100,
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

const User = mongoose.model('User', userSchema);

module.exports = { User }