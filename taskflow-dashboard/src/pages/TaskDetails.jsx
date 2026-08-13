import { useParams } from "react-router-dom";
import Header from "../components/Header";

function TaskDetails() {
  const { id } = useParams();

  return (
    <div className="app">
      <Header />

      <main className="dashboard">
        <section className="welcome-section">
          <h1>Task Details</h1>
          <p>Task ID: {id}</p>
        </section>
      </main>
    </div>
  );
}

export default TaskDetails;