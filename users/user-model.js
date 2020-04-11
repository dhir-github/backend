const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let validator = require("validator");

const schema = new Schema({
    email: {
      type: String, 
      unique: true, 
      lowercase: true,
      required: true,
      validate: {
        validator: validator.isEmail,
        message: 'Not a valid email address',
        isAsync: false
      },
      trim: true,
      index: true 
    },
    hash: { 
      type: String,
      required: true
    },
    firstName: { 
      type: String, 
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 24
    },
    lastName: { 
      type: String, 
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 24 
    },
    createdDate: {
      type: Date,
      default: Date.now
    }
});

schema.set('toJSON', { virtuals: true });

let User = mongoose.model('User', schema);
module.exports = User;