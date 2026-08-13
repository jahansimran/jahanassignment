import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggleTask, onDeleteTask, deletingTaskId, }) {

  return (
    <section className="task-list-section">
      <div className="section-heading">
        <h2>Tasks</h2>
        <span>{tasks.length} tasks</span>
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.clientId}
            task={task}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
            deleting={deletingTaskId === task.clientId}
          />
        ))}
      </div>
    </section>
  );
}

export default TaskList;