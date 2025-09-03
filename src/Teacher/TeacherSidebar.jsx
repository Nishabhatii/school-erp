import { Link } from "react-router-dom";
import "./Teacher.css";

export default function TeacherSidebar() {
  return (
    <div className="teacher-sidebar">
      <h2 className="sidebar-title">Teacher Panel</h2>
      <ul>
        <li><Link to="home">🏠 Home</Link></li>
        <li><Link to="attendance">📋 Attendance</Link></li>
        <li><Link to="timetable">📅 Timetable</Link></li>
        <li><Link to="assignments">📝 Assignments</Link></li>
        <li><Link to="notice">📢 Notice</Link></li>
        <li><Link to="principalmsg">🎓 Principal Msg</Link></li>
        <li><Link to="studentrecord">📖 Student Record</Link></li>
        <li><Link to="event">🎉 Event</Link></li>
        <li><Link to="about">ℹ️ About</Link></li>
      </ul>
    </div>
  );
}
