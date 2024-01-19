const bcrypt = require("bcryptjs");
const HttpError = require("../models/errorModel");
const User = require("../models/userModels");
const jwt = require("jsonwebtoken");

const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");
const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, password2 } = req.body;
    if (!name || !email | !password) {
      return res.status(404).json({ message: "Fill in all fields." });
    }

    const newEmail = email.toLowerCase();

    const emailExist = await User.findOne({ email: newEmail });
    if (emailExist) {
      return res.status(404).json({ message: "Email already exist." });
    }

    if (password.trim().length < 6) {
      return res
        .status(404)
        .json({ message: "Password should be at least 6 characters." });
    }
    if (password != password2) {
      return res.status(404).json({ message: "Password do not match." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name,
      email: newEmail,
      password: hashedPassword,
    });
    res.status(201).json(`New User ${newUser.email} registered`);
  } catch (error) {
    return res.status(404).json({ message: "User registration failed." });
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ message: "Fill in all fields." });
    }
    const newEmail = email.toLowerCase();
    const user = await User.findOne({ email: newEmail });
    if (!user) {
      return res.status(404).json({ message: "User does not exist." });
    }
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      return res.status(400).json({ message: "Login failed.Please check" });
    }
    const { _id: id, name } = user;
    const token = jwt.sign({ id, name }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("access_token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.status(200).json({ token, id, name });
  } catch (error) {
    return res.status(400).json({ message: "Login failed.Please check" });
  }
};

const logoutUser = (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};
const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password");
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {}
};
const changeAvatar = async (req, res, next) => {
  try {
    if (!req.files.avatar) {
      return res.status(400).json({ message: "Please choose an image" });
    }

    const user = await User.findById(req.user.id);
    console.log(user);
    if (user.avatar) {
      fs.unlink(path.join(__dirname, "..", "uploads", user.avatar), (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
    
    const { avatar } = req.files;
    console.log(avatar);
    if (avatar.size > 5000000) {
      return res.status(400).json({ message: "Profile picture too big" });
    }


    let fileName = avatar.name;
    let splittedFilename = fileName.split(".");
    let newFileName =
      splittedFilename[0] +
      uuid() +
      "." +
      splittedFilename[splittedFilename.length - 1];
    avatar.mv(
      path.join(__dirname, "..", "/uploads", newFileName),
      async (err) => {
        if (err) {
          return err;
        }

        const updatedAvatar = await User.findByIdAndUpdate(
          req.user.id,
          { avatar: newFileName },
          { new: true }
        );
        if (!updatedAvatar) {
          return res
            .status(400)
            .json({ message: "Avatar couldn't be changed" });
        }
        res.status(200).json(updatedAvatar);
      }
    );
  } catch (error) {
    console.log(error);
    // return res.status(404).json({ message: "change avatar is dont working" });
  }
};
const editUser = async (req, res, next) => {
  try {
    const { name, email, currentPassword, newPassword, newConfirmPassword } =
      req.body;
    if (!name || !email || !currentPassword || !newPassword) {
      res.status(400).json({ message: "Fill in all fields" });
    }

    const user = await User.findById(req.user.id);
    console.log("User>", user);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const emailExist = await User.findOne({ email });
    if (emailExist && emailExist._id != req.user.id) {
      return res.status(400).json({ message: "Email already exist" });
    }

    const validateUserPassword = await bcrypt.compare(
      currentPassword,
      user.password
    );
    if (!validateUserPassword) {
      return res.status(400).json({ message: "Invalid current password" });
    }

    if (newPassword !== newConfirmPassword) {
      return res.status(400).json("password does not match");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);

    const newInfo = await User.findByIdAndUpdate(
      req.user.id,
      { name, email, password: hash },
      { new: true }
    );
    res.status(200).json(newInfo);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const getAuthors = async(req, res, next) => {
  try{
    const authors = await User.find()
    res.status(200).json(authors);
  }catch(err){
    console.log(err);
  }
};

module.exports = {
  registerUser,
  loginUser,
  changeAvatar,
  editUser,
  getAuthors,
  getUser,
  logoutUser,
};
