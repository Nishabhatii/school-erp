import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import StudentDashboard from "./Components/StudentDashboard";
import TeacherDashboard from "./Teacher/TeacherDashboard";

// Import nested student components
import Attendence from "./Student/Attendence";
import Timetable from "./Student/Timetable";
import Homework from "./Student/Homework";
import Notice from "./Student/Notice";

import Fees from "./Student/Fees";


function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/school-erp" element={<LoginPage />} />
        <Route path="/school-erp" element={<LoginPage />} />

        {/* Teacher dashboard */}
        <Route path="/teacher/*" element={<TeacherDashboard />} />

        {/* Student dashboard with nested routes */}
        <Route path="/student-dashboard/*" element={<StudentDashboard />}>
          <Route path="attendence" element={<Attendence />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="homework" element={<Homework />} />
          <Route path="notice" element={<Notice />} />
          
          <Route path="fees" element={<Fees />} />
         
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
