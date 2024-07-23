const express = require("express");
const { getAllTasks ,createTask, getTask, deleteTask, updateTask} = require("../controllers/tasks");
const protect = require("../middleware/auth-protect");
const router  = express.Router();

router.route("/").get(protect,getAllTasks).post(protect,createTask)
router.route("/:id").get(protect,getTask).delete(protect,deleteTask).patch(protect,updateTask)

module.exports = router
