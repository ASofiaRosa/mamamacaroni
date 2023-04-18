const { Review } = require("../models/reviews");

const getReviews = async (req, res, next) => {
  res.send("works");
};

const getReview = async (req, res, next) => {};

const updateReview = async (req, res, next) => {};

const createReview = async (req, res, next) => {};

const deleteReview = async (req, res, next) => {};

module.exports = {
  getReviews,
  createReview,
  getReview,
  updateReview,
  deleteReview,
};
