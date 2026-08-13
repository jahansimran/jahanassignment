import { useState } from "react";

function TaskForm({ onAddTask, submitting }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    const success = await onAddTask(trimmedTitle);

    if (success) {
      setTitle("");
    }
  };

  return (
    <section className="task-form-section">
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Add a new task..."
          aria-label="Task title"
          disabled={submitting}
        />

        <button
          type="submit"
          className="add-task-button"
          disabled={submitting || !title.trim()}
        >
          {submitting ? "Adding..." : "Add Task"}
        </button>
      </form>
    </section>
  );
}

export default TaskForm;