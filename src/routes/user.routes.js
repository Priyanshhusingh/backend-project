const express = require("express");
const {
  registerUser,
  loginUser,
  logOutuser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetail,
  updateUserAvatar,
  getUserChannelProfile,
  getWatchHistory,
} = require("../controllers/User.controller");
const { upload } = require("../middlewares/multer.middleware");
const { verifyJWT } = require("../middlewares/auth.middleware");
const multer = require("multer");

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
UserRouter.route("/refresh-token").post(refreshAccessToken);
UserRouter.route("/change-passwrd").post(verifyJWT, changeCurrentPassword);
UserRouter.route("/current-user").get(verifyJWT, getCurrentUser);
UserRouter.route("/update-account").patch(verifyJWT, updateAccountDetail);
UserRouter.route("avatar").patch(
  verifyJWT,
  upload.single("avatar"),
  updateUserAvatar
);
UserRouter.route("/c/:username").get(verifyJWT, getUserChannelProfile);
UserRouter.route("/watchHistory").get(verifyJWT, getWatchHistory);
module.exports = UserRouter;
