const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String, 
        required: [true, 'Type your password'],
        minlength: [6, 'Minimum length is 6 characters']
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;
