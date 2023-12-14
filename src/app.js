const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const UserRouter = require("./routes/user.routes");

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
//routes declaration
app.use("/api/v1/users", UserRouter);

module.exports = app;
