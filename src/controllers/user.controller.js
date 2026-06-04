const AppError = require("../utils/AppError");
const User = require("../models/user.model");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    const user = await User.create({
      name,
      email,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  createUser,
};
