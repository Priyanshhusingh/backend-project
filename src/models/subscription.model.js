const mongoose = require("mongoose");
const { Schema } = mongoose;

const scbscriptionSchema = new Schema(
  {
    subsciber: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    channel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Subscription = mongoose.model("Subscription", scbscriptionSchema);
module.exports = Subscription;
