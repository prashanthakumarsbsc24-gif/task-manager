import TaskList from "../components/TaskList";
import { useTasks } from "../context/TaskContext";

function Tasks() {
  const {
    tasks,
    loading,
    error,
    deleteTask,
    completeTask,
  } = useTasks();

  if (loading) {
    return (
      <div>
        <h1>My Tasks</h1>
        <p>Loading tasks...</p>
      </div>
    );
  }

  return (
    <div>
      <h1>My Tasks</h1>

      <p>Here are your current tasks.</p>

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      <br />

      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onComplete={completeTask}
      />
    </div>
  );
}

export default Tasks;