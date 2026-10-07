import { useTasks } from "../context/TaskContext";

function Dashboard() {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  ).length;

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome to your Task Management Application.</p>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Tasks</h3>
          <p>{totalTasks}</p>
        </div>

        <div className="card">
          <h3>Completed</h3>
          <p>{completedTasks}</p>
        </div>

        <div className="card">
          <h3>Pending</h3>
          <p>{pendingTasks}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;