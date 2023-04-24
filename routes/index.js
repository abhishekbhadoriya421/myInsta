const express = require('express');
const homePage = require('../controllers/home_controller');

const router = express.Router();

router.get('/', homePage.home)
router.use('/users' , require('./users'));
module.exports = router;