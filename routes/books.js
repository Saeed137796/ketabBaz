const express = require('express');
const router = express.Router();
const BookController = require('../http/controllers/BookController')
router.get('/all',BookController.show)





module.exports = router;