const express = require("express");
const { registerUser } = require("../controllers/User.controller");
const UserRouter = express.Router();

UserRouter.route("/register").post(registerUser);

module.exports = UserRouter;
