const express = require("express");
const {
  getReviews,
  createReview,
  getReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviews");

const reviewRouter = express.Router();

reviewRouter.post("/", createReview);
reviewRouter.get("/", getReviews);
reviewRouter.get("/:id", getReview);
reviewRouter.put("/:id", updateReview);
reviewRouter.delete("/:id", deleteReview);

module.exports = {
  reviewRouter,
};
