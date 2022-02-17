const express = require('express');
const router = express.Router();

const controller = require('../controllers/auth.controller');

//GET Login Form
// router.get('/login', controller.getLoginForm);

//POST Login
router.post('/login', controller.login);

//GET Signup Form
// router.get('/signup', controller.getSignupForm);

//POST Signup
router.post('/signup', controller.signup);


module.exports = router;