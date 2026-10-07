import TaskCard from "./TaskCard";

function TaskList({ tasks, onDelete, onComplete }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;