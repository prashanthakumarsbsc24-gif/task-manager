const fs = require("fs");
const path = require("path");

const tasksFile = path.join(__dirname, "../tasks.json");

// GET all tasks
function getTasks(req, res) {
  try {
    const data = fs.readFileSync(tasksFile, "utf-8");
    const tasks = JSON.parse(data);

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: "Unable to read tasks",
    });
  }
}

// ADD a new task
function addTask(req, res) {
  try {
    const data = fs.readFileSync(tasksFile, "utf-8");
    const tasks = JSON.parse(data);

    const newTask = {
      id: Date.now(),
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority,
      completed: false,
    };

    tasks.push(newTask);

    fs.writeFileSync(
      tasksFile,
      JSON.stringify(tasks, null, 2)
    );

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({
      message: "Unable to add task",
    });
  }
}

// DELETE a task
function deleteTask(req, res) {
  try {
    const data = fs.readFileSync(tasksFile, "utf-8");
    const tasks = JSON.parse(data);

    const taskId = Number(req.params.id);

    const updatedTasks = tasks.filter(
      (task) => task.id !== taskId
    );

    fs.writeFileSync(
      tasksFile,
      JSON.stringify(updatedTasks, null, 2)
    );

    res.json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Unable to delete task",
    });
  }
}

// COMPLETE / UNDO a task
function completeTask(req, res) {
  try {
    const data = fs.readFileSync(tasksFile, "utf-8");
    const tasks = JSON.parse(data);

    const taskId = Number(req.params.id);

    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    );

    fs.writeFileSync(
      tasksFile,
      JSON.stringify(updatedTasks, null, 2)
    );

    const updatedTask = updatedTasks.find(
      (task) => task.id === taskId
    );

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({
      message: "Unable to update task",
    });
  }
}

module.exports = {
  getTasks,
  addTask,
  deleteTask,
  completeTask,
};