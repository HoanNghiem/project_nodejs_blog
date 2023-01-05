const { urlencoded } = require('express');
const express = require('express');
const router = express.Router();
const adminController = require('../app/controllers/AdminController');




// newsController.index
// router.get('/index', adminController.valid);
router.post('/index', adminController.index);
router.get('/', adminController.login);



module.exports = router;