function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <article className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-main">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
          aria-label={`Mark ${task.title} as ${
            task.completed ? "incomplete" : "complete"
          }`}
        />

        <div className="task-title">{task.title}</div>
      </div>

      <button
        type="button"
        className="delete-button"
        onClick={() => onDeleteTask(task.id)}
        aria-label={`Delete ${task.title}`}
      >
        Delete
      </button>
    </article>
  );
}

export default TaskItem;