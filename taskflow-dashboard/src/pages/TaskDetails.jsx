import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import Header from "../components/Header";
import { getTask } from "../services/taskService";
import { useTasks } from "../context/TaskContext";

function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    tasks,
    completedCount,
    mutationError,
    handleDeleteTask,
    deletingTaskId,
  } = useTasks();

  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const existingTask = tasks.find(
      (item) => String(item.id) === String(id)
    );

    if (existingTask) {
      setTask(existingTask);
      setLoading(false);
      return;
    }

    const loadTask = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getTask(id);

        setTask({
          ...data,
          clientId: crypto.randomUUID(),
        });
      } catch (error) {
        console.error("Failed to load task:", error);
        setError("Unable to load task details.");
      } finally {
        setLoading(false);
      }
    };

    loadTask();
  }, [id, tasks]);

  const handleBack = () => {
    navigate("/");
  };

  const handleDelete = async () => {
    if (!task) {
      return;
    }

    const success = await handleDeleteTask(
      task.clientId
    );

    if (success) {
      navigate("/");
    }
  };

  const isDeleting =
    deletingTaskId === task?.clientId;

  return (
    <div className="app">
      <Header completedCount={completedCount} />

      <main className="dashboard">
        {loading && (
          <div className="status-message">
            Loading task...
          </div>
        )}

        {!loading && error && (
          <div className="status-card error-card">
            <h2>Something went wrong</h2>

            <p>{error}</p>

            <button
              type="button"
              className="back-button"
              onClick={handleBack}
            >
              Back
            </button>
          </div>
        )}

        {!loading && !error && task && (
          <>
            {mutationError && (
              <div className="mutation-error">
                {mutationError}
              </div>
            )}
            <section className="task-details">
              <h1>Task Details</h1>

              <div className="task-details-content">
                <div className="detail-row">
                  <span className="detail-label">
                    Task ID
                  </span>

                  <span className="detail-value">
                    {task.id}
                  </span>
                </div>

                <div className="detail-row">
                  <span className="detail-label">
                    User ID
                  </span>

                  <span className="detail-value">
                    {task.userId}
                  </span>
                </div>

                <div className="detail-row">
                  <span className="detail-label">
                    Title
                  </span>

                  <span className="detail-value">
                    {task.title}
                  </span>
                </div>

                <div className="detail-row">
                  <span className="detail-label">
                    Status
                  </span>

                  <span className="detail-value">
                    {task.completed
                      ? "Completed"
                      : "Pending"}
                  </span>
                </div>

                <div className="description-section">
                  <span className="detail-label">
                    Description
                  </span>

                  <p>
                    This is a placeholder description for
                    this task.
                  </p>
                </div>
              </div>

              <div className="task-detail-actions">
                <button
                  type="button"
                  className="back-button"
                  onClick={handleBack}
                  disabled={isDeleting}
                >
                  Back
                </button>

                <button
                  type="button"
                  className="detail-delete-button"
                  onClick={handleDelete}
                  disabled={isDeleting}
                >
                  {isDeleting
                    ? "Deleting..."
                    : "Delete"}
                </button>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default TaskDetails;