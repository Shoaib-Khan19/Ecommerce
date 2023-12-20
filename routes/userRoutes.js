const express = require('express');

const {registerUser} = require('../controller/userController');


const router = express.Router();

//sending data to server using createProduct controller

router.post('/registerUser', registerUser);


module.exports = router