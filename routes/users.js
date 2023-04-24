const express = require('express');
const users_controller = require('../controllers/users_controller');
const router = express.Router();

router.get('/profile', users_controller.profile);

module.exports = router;
