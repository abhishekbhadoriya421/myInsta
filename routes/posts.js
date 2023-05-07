const PostController = require('../controllers/post_controller');
const router = require('express').Router();

router.post('/createPost',PostController.createPost);

module.exports = router;