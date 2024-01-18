

const express = require('express');
const router = express.Router();
const {
    createPost, getCatPosts , getUserPosts , deletePost,
    editPost,
    getPosts,
    getPost
} = require('../controller/postController');
const { authMiddleware, protect } = require('../middleware/authMiddleware');


router.post('/',authMiddleware, createPost);
router.get('/', getPosts);
router.get('/:id', getPost);
router.get('/categories/:category', getCatPosts);
router.get("/users/:id", getUserPosts);
router.delete('/:id', authMiddleware,deletePost);
router.patch('/:id', authMiddleware, editPost);


module.exports = router