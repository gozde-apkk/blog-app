
const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getUser,changeAvatar,editUser,getAuthors} = require('../controller/userController.js');
const { authMiddleware } = require('../middleware/authMiddleware.js');



router.get('/', (req,res,next) => {
    res.json("user route");
})

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/change-avatar',authMiddleware, changeAvatar);
router.patch('/edit-user', editUser);
router.get('/authors', getAuthors);
router.get('/:id', getUser)
// /users/author/:id
module.exports = router