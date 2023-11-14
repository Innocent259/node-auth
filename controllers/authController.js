const User = require('../models/User')

const getSignup = (req, res) => {
    res.send('Will be signup page')
}
const postSignup = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password });
    } catch (error) {
        res.status(400).send('An error occurs while trying to create a new user')
    }
    res.send('Here should post')
}

const loginGet = (req, res) => {
    res.send('Login get') 
}

const loginPost = (req, res) => {
    res.send('New login request')
}

module.exports = ({
    getSignup,
    postSignup,
    loginGet,
    loginPost
})
