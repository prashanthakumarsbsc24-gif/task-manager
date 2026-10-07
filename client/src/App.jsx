import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/tasks" element={<Tasks />} />

          <Route path="/add-task" element={<AddTask />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;