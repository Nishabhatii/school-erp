import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import StudentDashboard from "./Components/StudentDashboard";
import TeacherDashboard from "./Teacher/TeacherDashboard";

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<LoginPage />} />
        <Route path="/school-erp" element={<LoginPage />} />

       
        <Route path="/TeacherDashboard/*" element={<TeacherDashboard />} />
        <Route path="/student-dashboard/*" element={<StudentDashboard />}>
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
