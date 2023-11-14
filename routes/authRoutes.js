const { Router } = require('express');
const authController = require('../controllers/authController') 

const router = Router();

router.get('/signup', authController.getSignup);
router.get('/login', authController.loginGet);
router.post('/signup', authController.postSignup);
router.post('/login', authController.loginPost);

module.exports = router;
