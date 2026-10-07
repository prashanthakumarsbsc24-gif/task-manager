function TaskCard({ task, onDelete, onComplete }) {
  return (
    <div className="task-card">
      <div>
        <h3>{task.title}</h3>

        <p>{task.description}</p>

        <p>
          <strong>Priority:</strong> {task.priority}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          {task.completed ? "Completed" : "Pending"}
        </p>
      </div>

      <div className="task-buttons">
        <button onClick={() => onComplete(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          className="delete-button"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;