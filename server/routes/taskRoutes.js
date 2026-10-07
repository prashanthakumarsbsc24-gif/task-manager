const express = require("express");

const router = express.Router();

const {
  getTasks,
  addTask,
  deleteTask,
  completeTask,
} = require("../controllers/taskController");

// GET all tasks
router.get("/", getTasks);

// ADD a new task
router.post("/", addTask);

// DELETE a task
router.delete("/:id", deleteTask);

// COMPLETE / UNDO a task
router.put("/:id", completeTask);

module.exports = router;