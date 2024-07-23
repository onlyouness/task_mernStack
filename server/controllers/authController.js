const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/config");
const User = require("../models/user");
const { createCustomError } = require("../errors/error-custom");

const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: 3*24*60*60,
  });
};

exports.register = async (req, res, next) => {
  const { email } = req.body;
  try {
    const userCheck = await User.findOne({ email });
    if (userCheck) {
      next(
        createCustomError(
          `This email ${email} is already been taken, try another one`,
          400
        )
      );
    }
    const user = await User.create(req.body);
    const token = generateToken(res, user._id);
    res.status(201).json({
      user,
      token,
      status: true,
      message: "Registered Successfully!",
    });
  } catch (error) {
    next(createCustomError(error.message, 500));
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(createCustomError("There is no user with this email", 400));
    }

    // Await the password comparison
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return next(createCustomError("Your password is incorrect", 400));
    }
    const token = generateToken(user._id);
    res
      .cookie("jwt", token, {
        httpOnly: true,
        // secure: true, 
        sameSite: "none", // Required for cross-site cookies
      })

      res.status(201)
      .json({
        user,
        token,
        status: true,
        message: "Logged in Successfully!",
      });
  } catch (error) {
    next(createCustomError("something went wrong", 500));
  }
};

exports.logout = (req, res) => {
  return res
    .clearCookie("jwt")
    .status(200)
    .json({ message: "Successfully logged out" });
};
