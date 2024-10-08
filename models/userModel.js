//creating schema - key value pairs..

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'name is required'],
    },
    email:{
        type: String,
        required: [true, 'email is required'],
        unique: true,
    },
    password:{
        type: String,
        unique: true,
    },
}, {timestamps: true});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;