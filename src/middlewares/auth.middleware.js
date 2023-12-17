const jwt = require("jsonwebtoken");
const ApiError = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");
const User = require("../models/User.model");

exports.verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accesstoken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new ApiError(401, "Unauthorized Request");
    }
    const deodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const UserDoc = await User.findById(deodedToken?._id).select(
      "-password -refreshToken"
    );
    if (!UserDoc) {
      throw new ApiError(401, "Invalid acccess token");
    }
    req.UserDoc = UserDoc;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Inavlid accessToken");
  }
});
