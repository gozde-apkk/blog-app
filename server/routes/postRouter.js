

const express = require('express');
const router = express.Router();
const {
    createPost, getCatPosts , getUserPosts , getPost, deletePost,
    editPost
} = require('../controller/postController');
const { authMiddleware } = require('../middleware/authMiddleware');


router.post('/', createPost);
router.get('/', getPost);
router.get('/:id', getPost);
router.get('/categories/:category', getCatPosts);
router.get("/users/:id", getUserPosts);
router.delete('/:id', authMiddleware, deletePost);
router.patch('/:id', authMiddleware, editPost);


module.exports = router