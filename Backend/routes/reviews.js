const express = require("express");
const {
  getReviews,
  createReview,
  getReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviews");

const { verifyToken } = require("../middlewares/verifyToken");

const reviewRouter = express.Router();

reviewRouter.post("/", verifyToken, createReview);
reviewRouter.get("/", getReviews);
reviewRouter.get("/:id", getReview);
reviewRouter.put("/:id", verifyToken, updateReview);
reviewRouter.delete("/:id", verifyToken, deleteReview);

module.exports = {
  reviewRouter,
};
