import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import StudentDashboard from "./Components/StudentDashboard";
import TeacherDashboard from "./Teacher/TeacherDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Student-Dashboard" element={<StudentDashboard />} />
        <Route path="/teacher/*" element={<TeacherDashboard />} />
        <Route path="/school-erp" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
