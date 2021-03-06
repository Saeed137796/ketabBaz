const express = require('express');
const router = express.Router();
const UserController = require('../http/controllers/UserController');
router.get('/login',UserController.login)




module.exports = router;