const { Schema, Types, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    stars: { type: Number, required: true },
    author: { type: Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const User = model("Review", reviewSchema);

module.exports = {
  User,
};
