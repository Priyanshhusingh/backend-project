const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(`${process.env.MONGO_URL}`).then(() => {
      console.log(
        `Database connected successfully !! DBHOST: ${mongoose.connection.host}`
      );
    });
  } catch (error) {
    console.error("MongoDB connection error: ", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
