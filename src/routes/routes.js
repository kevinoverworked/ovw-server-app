const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

//router.get('/say-something', controllers.saySomething);
router.get('/get-users', controllers.getAllUsers);
router.get('/login', controllers.loginUser);

module.exports = router;