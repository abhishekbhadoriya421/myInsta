const express = require('express');
const homeController = require('../controllers/home_controller');
const anotherHomeController = require('../controllers/newHomeController');

const router = express.Router();

router.get('/', anotherHomeController);

module.exports = router;