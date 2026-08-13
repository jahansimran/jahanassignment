function TaskForm() {
  return (
    <section className="task-form-section">
      <form className="task-form">
        <input
          type="text"
          placeholder="Add a new task..."
          aria-label="Task title"
        />

        <button type="submit">
          Add Task
        </button>
      </form>
    </section>
  );
}

export default TaskForm;