const Task = require("../models/task");
const mongoose = require("mongoose");
const {createCustomError} = require('../errors/error-custom')


exports.getAllTasks = async (req, res,next) => {
  const tasks = await Task.find({}).sort({created_at:-1});
  if (!tasks) {
    return next(createCustomError("The Tasks doesnt exists",400))
  }
  res.status(201).json({tasks});
};
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task,status:"The Task Created Successfully" });
  } catch (error) {
    return next(createCustomError(error.message,500))
  }
};
exports.getTask = async (req, res,next) => {
  const { id: taskID } = req.params;
  try {
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
        return next(createCustomError(`No Task With This ID ${taskID}`,400))
    }
    res.status(201).json({ task });
  } catch (error) {
    next(createCustomError("Something went wrong please try again later",500))
  }
};
exports.deleteTask = async (req, res,next) => {
  console.log("id",req.params.id)
  const { id: taskID } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
        return next(createCustomError(`No Task With This ID ${taskID}`,400))
    }
    res.status(201).json({ task,status:"Deleted Successfully!" });
  } catch (error) {
    next(createCustomError("Something went wrong please try again later",500))
  }
};
exports.updateTask = async (req, res, next) => {
  const { id: taskID } = req.params;
  if (!mongoose.Types.ObjectId.isValid(taskID)) {
    return next(createCustomError(`This Id Is Not Valid ${taskID}`,400))
  }
  try {
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
        return next(createCustomError(`No Task With This ID ${taskID}`,400))
    }
    res.status(201).json({ task });
  } catch (error) {
    next(createCustomError("Something went wrong please try again later",500))
  }
};
