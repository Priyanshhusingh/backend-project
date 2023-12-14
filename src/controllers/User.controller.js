const asyncHandler = require("../utils/asyncHandler");

exports.registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});
