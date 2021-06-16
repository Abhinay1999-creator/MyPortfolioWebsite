const mongoose = require("mongoose");
const validator = require('validator');

const dataList = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        maxlength: 12
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is Invalid");
            }
        }
    },
    msg: {
        type: String,
        required: true,
        maxlength: [280, "Maximum letter length reached"]
    }

})

const User = new mongoose.model("USER", dataList);

module.exports = User;