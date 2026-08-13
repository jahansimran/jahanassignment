import "./App.css";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import TaskDetails from "./pages/TaskDetails";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
      </Routes>
    </TaskProvider>
  );
}

export default App;