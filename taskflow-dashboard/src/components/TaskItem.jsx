function TaskItem({ task }) {
  return (
    <article className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-main">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => {}}
          aria-label={`Mark ${task.title} as ${
            task.completed ? "incomplete" : "complete"
          }`}
        />

        <div className="task-title">
          {task.title}
        </div>
      </div>

      <button
        type="button"
        className="delete-button"
        onClick={() => {}}
        aria-label={`Delete ${task.title}`}
      >
        Delete
      </button>
    </article>
  );
}

export default TaskItem;