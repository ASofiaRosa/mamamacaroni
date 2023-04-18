const express = require("express");
const { getProfile, getUsers, updateUser } = require("../controllers/users");

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/profile", getProfile);
userRouter.put("/:id", updateUser);

module.exports = {
  userRouter,
};
