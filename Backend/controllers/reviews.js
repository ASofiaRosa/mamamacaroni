const { Review } = require("../models/reviews");
const { ErrorResponse } = require("../utils/ErrorResponse");

const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({}).populate("author");
    res.json(reviews);
  } catch (error) {
    next(error);
  }
};

const getReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    const review = await Review.findById(id).populate("author");
    res.json(review);
  } catch (error) {
    next(error);
  }
};

const createReview = async (req, res, next) => {
  try {
    const { title, description, stars } = req.body;
    const author = req.user.id;
    const review = await Review.create({ title, description, author, stars });
    res.json(review);
  } catch (error) {
    next(error);
  }
};

const updateReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, stars } = req.body;
    const review = await Review.findOneAndUpdate(
      id,
      { title, description, stars },
      { new: true }
    );
    res.json(review);
  } catch (error) {
    next(error);
  }
};

const deleteReview = async (req, res, next) => {
  try {
    const { id } = req.params;
    const review = await Review.findByIdAndDelete(id);
    res.json(review);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getReviews,
  createReview,
  getReview,
  updateReview,
  deleteReview,
};
