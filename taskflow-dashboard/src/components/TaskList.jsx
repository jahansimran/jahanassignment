import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <section className="task-list-section">
      <div className="section-heading">
        <h2>Tasks</h2>
        <span>{tasks.length} tasks</span>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </div>
    </section>
  );
}

export default TaskList;