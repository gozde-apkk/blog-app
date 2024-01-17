const Post = require("../models/postModel");
const User = require("../models/userModels");
const path = require('path');
const fs = require('fs');
const {v4 : uuid} = require('uuid');

const createPost = async(req , res, next) =>{
   
}
const getCatPosts = async(req , res, next) =>{
    res.json("get cat post")
}
const getUserPosts = async(req , res, next) =>{
    res.json("getUserPosts")
}
const getPost = async(req , res, next) =>{
    res.json("get post")
}
const deletePost = async(req , res, next) =>{
    res.json("create post")
}
const editPost = async(req , res, next) =>{
    res.json("create post")
}


module.exports = {
    createPost, getCatPosts , getUserPosts , getPost, deletePost,
    editPost
}