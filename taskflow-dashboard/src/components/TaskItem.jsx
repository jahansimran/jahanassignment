import { useNavigate } from "react-router-dom";

function TaskItem({
  task,
  onToggleTask,
  onDeleteTask,
  deleting,
}) {
  const navigate = useNavigate();

  const handleTaskClick = () => {
    navigate(`/tasks/${task.id}`);
  };

  return (
    <article
      className={`task-item ${task.completed ? "completed" : ""}`}
      onClick={handleTaskClick}
    >
      <div className="task-main">
        <input
          type="checkbox"
          checked={task.completed}
          onClick={(event) => {
            event.stopPropagation();
          }}
          onChange={() => {
            onToggleTask(task.clientId);
          }}
          aria-label={`Mark ${task.title} as ${task.completed ? "incomplete" : "complete"
            }`}
        />

        <div className="task-title">
          {task.title}
        </div>
      </div>

      <button
        type="button"
        className="delete-button"
        onClick={(event) => {
          event.stopPropagation();
          onDeleteTask(task.clientId);
        }}
        disabled={deleting}
        aria-label={`Delete ${task.title}`}
      >
        {deleting ? "Deleting..." : "Delete"}
      </button>
    </article>
  );
}

export default TaskItem;