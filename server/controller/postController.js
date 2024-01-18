const Post = require("../models/postModel");
const User = require("../models/userModels");
const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid");

const createPost = async (req, res, next) => {
  try {
    const { title, category, description } = req.body;
    console.log(req.body);
    if (!title || !category || !description) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const { thumbnail } = req.files;
    if (thumbnail.size > 2000000) {
      return res.status(400).json({ message: "Thumbnail too big" });
    }
    let fileName = thumbnail.name;
    let splittedFilename = fileName.split(".");
    let newFilename =
      splittedFilename[0] +
      uuid() +
      "." +
      splittedFilename[splittedFilename.length - 1];
    thumbnail.mv(
      path.join(__dirname, "..", "/upload", newFilename),
      async (err) => {
        if (err) {
          return err;
        } else {
          const newPost = await Post.create({
            title,
            category,
            description,
            thumbnail: newFilename,
            creator: req.user.id,
          });
          if (!newPost) {
            return res.status(400).json({ message: "Post not created" });
          }

          const currentUser = await User.findById(req.user.id);
          const userPostCount = currentUser.posts + 1;
          const user = await User.findByIdAndUpdate(req.user.id, {
            posts: userPostCount,
          });

          res
            .status(200)
            .json({ message: "Post created successfully", newPost });
        }
      }
    );
  } catch (error) {
    return console.log(error);
  }
};
const getCatPosts = async (req, res, next) => {
  try {
    const { category } = req.params;
    const catPost = await Post.find({ category }).sort({ createdAt: -1 });
    res.status(400).json(catPost);
  } catch (error) {
    return console.log(error);
  }
};
const getUserPosts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const posts = await Post.find({ creator: id }).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    return console.log(error);
  }
};
const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ updateAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const getPost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post no found" });
    }
    res.status(200).json(post);
  } catch (error) {}
};
const deletePost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    if (!postId) {
      return res.status(404).json({ message: "Post unavaible" });
    }

    const post = await Post.findById(postId);
    console.log(post);
    const fileName = post?.thumbnail;
    fs.unlink(path.join(__dirname, '..', 'upload', fileName), async (err) => {
        
      if (err) {
        return console.log(err);
      } else {
        await Post.findByIdAndDelete(postId);

        const currentUser = await User.findById(req.user.id);
        const userPostCount = currentUser.posts - 1;
        const user = await User.findByIdAndUpdate(req.user.id, {
          posts: userPostCount,
        });
      }
    });
    res.json(`Post ${postId} deleted successfully`);
  } catch (error) {
    console.log(error)
  }
};
const editPost = async (req, res, next) => {
  try {
    let fileName;
    let newFileName;
    let updatedPost;
    const postId = req.params.id;
    const { title, category, description } = req.body;
    if (!title || !category || !description) {
      return res.status(404).json({ message: "All fields are required" });
    }
    if (!req.files) {
      updatedPost = await Post.findByIdAndUpdate(
        postId,
        { title, category, description },
        { new: true }
      );
    } else {
      const oldPost = await Post.findById(postId);
      fs.unlick(
        path.join(__dirname, "..", "upload", oldPost.thumbnail),
        async (err) => {
          if (err) {
            return console.log(err);
          }
        }
      );

      const { thumbnail } = req.files;
      if (thumbnail.size > 200000) {
        return res.status(400).json({ message: "Thumbnail too big " });
      }
      let fileName = thumbnail.name;
      let splittedFilename = fileName.split(".");
      let newFilename =
        splittedFilename[0] +
        uuid() +
        "." +
        splittedFilename[splittedFilename.length - 1];
      thumbnail.mv(
        path.join(__dirname, "..", "/upload", newFilename),
        async (err) => {
          if (err) {
            return err;
          } else {
            const updatedPost = await Post.findByIdAndUpdate(
              postId,
              {
                title,
                category,
                description,
                thumbnail: newFilename,
              },
              { new: true }
            );

            res
              .status(200)
              .json({ message: "Post created successfully", newPost });
          }
        }
      );
    }
  } catch (error) {}
};

module.exports = {
  createPost,
  getCatPosts,
  getPost,
  getUserPosts,
  getPosts,
  deletePost,
  editPost,
};
