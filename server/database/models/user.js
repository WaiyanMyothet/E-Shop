
const mongoose=require('mongoose');
const config=require('config');
const validator=require('validator');

let userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    approved: {
        type: Boolean,
        required: true,
        default: false
    },
    passwordResetToken: String,
    passwordResetExpires: Date

});

// The first param is the collection name this model represents
module.exports=mongoose.model(config.get('mongodb_collections.admin'), userSchema);
//module.exports={User};