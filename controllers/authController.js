const getSignup = (req, res) => {
    res.send('Will be signup page')
}
const postSignup = (req, res) => {
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
