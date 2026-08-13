import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useTasks } from "../context/TaskContext";

function Dashboard() {
  const {
    tasks,
    loading,
    error,
    submitting,
    updatingTaskId,
    deletingTaskId,
    completedCount,
    loadTasks,
    handleAddTask,
    mutationError,
    handleToggleTask,
    handleDeleteTask,
  } = useTasks();

  return (
    <div className="app">
      <Header completedCount={completedCount} />

      <main className="dashboard">
        <TaskForm
          onAddTask={handleAddTask}
          submitting={submitting}
        />

        {mutationError && (
          <div className="mutation-error">
            {mutationError}
          </div>
        )}

        {loading && (
          <div className="status-message">
            Loading tasks...
          </div>
        )}

        {!loading && error && (
          <div className="status-card error-card">
            <h2>Something went wrong</h2>

            <p>{error}</p>

            <button
              type="button"
              className="retry-button"
              onClick={loadTasks}
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && tasks.length === 0 && (
          <div className="status-card empty-card">
            <h2>No tasks found</h2>

            <p>
              You don't have any tasks yet. Add a task
              to get started.
            </p>
          </div>
        )}

        {!loading && !error && tasks.length > 0 && (
          <TaskList
            tasks={tasks}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
            // updatingTaskId={updatingTaskId}
            deletingTaskId={deletingTaskId}
          />
        )}
      </main>
    </div>
  );
}

export default Dashboard;