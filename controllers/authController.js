const User = require('../models/User');

const handleErrors = (err) => {
    const errors = { email: '', password: '' }

    // Duplicate errors
    if(err.code === 11000) {
        errors.email = "this emails is already used!"
        return errors
    }

    // Validations 
    if(err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }
    return errors
}

const getSignup = (req, res) => {
    res.send('Will be signup page');
}
const postSignup = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password });
        res.status(201).json(user);
    } catch (err) {
        const errors = handleErrors(err);
        res.status(404).json(errors)
    }
}

const loginGet = (req, res) => {
    res.send('Login get'); 
}

const loginPost = (req, res) => {
    res.send('New login request');
}

module.exports = ({
    getSignup,
    postSignup,
    loginGet,
    loginPost
});
