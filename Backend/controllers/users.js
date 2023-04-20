const { User } = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { ErrorResponse } = require("../utils/ErrorResponse");

const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) throw new ErrorResponse("User already exists", 400);

    const hash = await bcrypt.hash(password, 5);

    const newUser = await User.create({ name, email, password: hash });

    const payload = {
      id: newUser._id,
      email: newUser.email,
      name: newUser.name,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });

    res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 8,
      })
      .send(payload);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user)
      throw new ErrorResponse(
        "There is no account with this email, please Sign Up",
        404
      );

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new ErrorResponse("Wrong password", 401);

    const payload = {
      id: user._id,
      email: user.email,
      name: user.name,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "8h",
    });

    res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 8,
      })
      .send(payload);
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  res
    .cookie("access_token", "", {
      httpOnly: true,
      maxAge: 0,
    })
    .send("ok");
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const getProfile = async (req, res, next) => {
  try {
    const { email, id } = req.user;
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { email, name } = req.body;
  const user = await User.findByIdAndUpdate(id, { email, name }, { new: true });
  res.json(user);
  try {
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  login,
  logout,
  getUsers,
  getProfile,
  updateUser,
};
