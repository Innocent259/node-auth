const { Router } = require('express');
const authRouther = require('../controllers/authController') 

const router = Router();

router.get('/signup', authRouther.getSignup);
router.get('/login', authRouther.loginGet);
router.post('/signup', authRouther.postSignup);
router.post('/login', authRouther.loginPost);

module.exports = router;
