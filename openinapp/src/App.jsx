import { Login } from "./Pages";
import { BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";

function isAuthenticated() {
  // Return true if the user is authenticated; otherwise, return false
  return true; // Change this condition accordingly
}

function App() {

  
  return (
    <Router>
      <div className="overflow-x-hidden bg-[#F8FAFF]">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
