
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./TDashboard";
import Attendance from "./TAttendence";
import Timetable from "./TTimetable";

import "./styles/teacher.css";

export default function TeacherDashboard() {
  return (
    <Router>
      <div className="teacher-layout">
        {/* Sidebar */}
        <div className="teacher-sidebar">
          <h2>Teacher Panel</h2>
          <nav>
            <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/attendance">Attendance</Link></li>
              <li><Link to="/timetable">Timetable</Link></li>
              {/* <li><Link to="/assignments">Assignments</Link></li>
              <li><Link to="/grades">Grades</Link></li>
              <li><Link to="/profile">Profile</Link></li> */}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <main className="teacher-content">
          {/* Navbar */}
          <header className="teacher-navbar">
            <h1>School ERP - Teacher Dashboard</h1>
          </header>

          <div className="teacher-page">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/timetable" element={<Timetable />} />
             
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}
