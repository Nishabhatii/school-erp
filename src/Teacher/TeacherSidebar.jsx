import { Link } from "react-router-dom";
import "./Teacher.css";

export default function TeacherSidebar() {
  return (
    <div className="teacher-sidebar">
      <h2 className="logo">XYZ School</h2>
      <nav>
        <ul>
          <li><Link to="attendance">📋 Attendance</Link></li>
          <li><Link to="timetable">📅 Timetable</Link></li>
          <li><Link to="assignments">📝 Assignments</Link></li>
          <li><Link to="notice">📢 Notice Board</Link></li>
        </ul>
      </nav>
    </div>
  );
}
