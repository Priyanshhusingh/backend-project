const express = require("express");
const {
  registerUser,
  loginUser,
  logOutuser,
} = require("../controllers/User.controller");
const { upload } = require("../middlewares/multer.middleware");
const { verifyJWT } = require("../middlewares/auth.middleware");

const UserRouter = express.Router();

UserRouter.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);
UserRouter.route("/login").post(loginUser);

//secures routes
UserRouter.route("/logout").post(verifyJWT, logOutuser);
module.exports = UserRouter;
