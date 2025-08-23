import { Link, Routes, Route } from "react-router-dom";
import Dashboard from "./TDashboard";
import Attendence from "./TAttendence";
import Timetable from "./TTimetable";
import "./Style/Teacher.css";

export default function TeacherDashboard() {
  return (
    <div className="teacher-layout">
      <div className="teacher-sidebar">
        <h2>Teacher Panel</h2>
        <nav>
          <ul>
            <li><Link to="">Dashboard</Link></li>
            <li><Link to="attendence">Attendance</Link></li>
            <li><Link to="timetable">Timetable</Link></li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <main className="teacher-content">
        <header className="teacher-navbar">
          <h1>School ERP - Teacher Dashboard</h1>
        </header>

        <div className="teacher-page">
          <Routes>
            <Route path="" element={<Dashboard />} />
            <Route path="attendance" element={<Attendence />} />
            <Route path="timetable" element={<Timetable />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
