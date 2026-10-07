import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

const API_URL = "http://localhost:5000/api/tasks";

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch tasks when the application loads
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }

        return response.json();
      })
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setError("Unable to load tasks. Please check the server.");
        setLoading(false);
      });
  }, []);

  // Add task
  function addTask(task) {
    setError("");

    return fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add task");
        }

        return response.json();
      })
      .then((newTask) => {
        setTasks((previousTasks) => [
          ...previousTasks,
          newTask,
        ]);

        return newTask;
      })
      .catch((error) => {
        console.error("Error adding task:", error);
        setError("Unable to add task.");

        throw error;
      });
  }

  // Delete task
  function deleteTask(id) {
    setError("");

    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete task");
        }

        return response.json();
      })
      .then(() => {
        setTasks((previousTasks) =>
          previousTasks.filter((task) => task.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
        setError("Unable to delete task.");
      });
  }

  // Complete / Undo task
  function completeTask(id) {
    setError("");

    fetch(`${API_URL}/${id}`, {
      method: "PUT",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update task");
        }

        return response.json();
      })
      .then((updatedTask) => {
        setTasks((previousTasks) =>
          previousTasks.map((task) =>
            task.id === id ? updatedTask : task
          )
        );
      })
      .catch((error) => {
        console.error("Error updating task:", error);
        setError("Unable to update task.");
      });
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        addTask,
        deleteTask,
        completeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
