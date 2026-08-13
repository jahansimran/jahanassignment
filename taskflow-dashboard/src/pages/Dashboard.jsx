import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const sampleTasks = [
  {
    id: 1,
    userId: 1,
    title: "Complete project documentation",
    completed: false,
  },
  {
    id: 2,
    userId: 1,
    title: "Review project requirements",
    completed: true,
  },
  {
    id: 3,
    userId: 2,
    title: "Prepare project report",
    completed: false,
  },
];

function Dashboard() {
  return (
    <div className="app">
      <Header />

      <main className="dashboard">
        <TaskForm />

        <TaskList tasks={sampleTasks} />
      </main>
    </div>
  );
}

export default Dashboard;