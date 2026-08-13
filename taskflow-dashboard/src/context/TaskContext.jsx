import { createContext, useContext, useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  deleteTask,
} from "../services/taskService";

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [updatingTaskId, setUpdatingTaskId] = useState(null);
  const [deletingTaskId, setDeletingTaskId] = useState(null);
  const [mutationError, setMutationError] = useState("");

  const loadTasks = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getTasks();

      const tasksWithClientId = data.map((task) => ({
        ...task,
        clientId: crypto.randomUUID(),
      }));

      setTasks(tasksWithClientId);
    } catch (error) {
      console.error("Failed to load tasks:", error);
      setError("Unable to load tasks. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAddTask = async (title) => {
    try {
      setSubmitting(true);
      setMutationError("");

      const newTask = await createTask(title);

      setTasks((currentTasks) => [
        newTask,
        ...currentTasks,
      ]);

      return true;
    } catch (error) {
      console.error("Failed to create task:", error);

      setMutationError(
        "Unable to add task. Please try again."
      );

      return false;
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggleTask = async (clientId) => {
    const task = tasks.find(
      (item) => item.clientId === clientId
    );

    if (!task) {
      return;
    }

    const newCompletedStatus = !task.completed;

    try {
      setUpdatingTaskId(clientId);
      setMutationError("");

      await updateTask(task.id, newCompletedStatus);

      setTasks((currentTasks) =>
        currentTasks.map((item) =>
          item.clientId === clientId
            ? {
              ...item,
              completed: newCompletedStatus,
            }
            : item
        )
      );
    } catch (error) {
      console.error("Failed to update task:", error);

      setMutationError(
        "Unable to update task. Please try again."
      );
    } finally {
      setUpdatingTaskId(null);
    }
  };

  const handleDeleteTask = async (clientId) => {
    const task = tasks.find(
      (item) => item.clientId === clientId
    );

    if (!task) {
      return false;
    }

    try {
      setDeletingTaskId(clientId);
      setMutationError("");

      await deleteTask(task.id);

      setTasks((currentTasks) =>
        currentTasks.filter(
          (item) => item.clientId !== clientId
        )
      );

      return true;
    } catch (error) {
      console.error("Failed to delete task:", error);

      setMutationError(
        "Unable to delete task. Please try again."
      );

      return false;
    } finally {
      setDeletingTaskId(null);
    }
  };

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  const value = {
    tasks,
    loading,
    error,
    submitting,
    updatingTaskId,
    deletingTaskId,
    completedCount,
    loadTasks,
    handleAddTask,
    handleToggleTask,
    handleDeleteTask,
    mutationError,
  };

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error(
      "useTasks must be used inside a TaskProvider"
    );
  }

  return context;
}