const express = require('express');
const router = express.Router();
const { 
    loginController, 
    registerController 
} = require('../controllers/userController');

// Login route
router.post('/login', loginController);

// Register route
router.post('/register', registerController);

module.exports = router;
