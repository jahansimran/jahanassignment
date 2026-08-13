import Header from "../components/Header";

function Dashboard() {
  return (
    <div className="app">
      <Header />

      <main className="dashboard">
        <section className="welcome-section">
          <h1>TaskFlow</h1>
          <p>Your tasks will appear here.</p>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;