const express = require('express');
const router = express.Router();
const passport = require('passport');
const users_controller = require('../controllers/users_controller');

router.get('/profile', users_controller.profile);

router.get('/signIn',users_controller.signIn);
router.get('/signUp',users_controller.signUp);
router.get('/signOut',users_controller.destroySession);

router.post('/create',users_controller.create);
// router.post('/create-session',users_controller.createSession);

router.post('/create-session',passport.authenticate(
    "local",
    {failureRedirect : '/users/signIn',
    failureFlash: true}
),users_controller.createSession);

module.exports = router;
