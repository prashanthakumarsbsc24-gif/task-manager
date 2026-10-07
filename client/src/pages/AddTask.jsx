import TaskForm from "../components/TaskForm";
import { useTasks } from "../context/TaskContext";

function AddTask() {
  const { addTask, error } = useTasks();

  function handleAddTask(task) {
    addTask(task)
      .then(() => {
        alert("Task added successfully!");
      })
      .catch(() => {
        // Error message is already handled by TaskContext
      });
  }

  return (
    <div>
      <h1>Add New Task</h1>

      <p>Create a new task using the form below.</p>

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
}

export default AddTask;