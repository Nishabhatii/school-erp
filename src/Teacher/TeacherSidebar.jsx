import { Link } from "react-router-dom";
import "./Teacher.css";

export default function TeacherSidebar() {
  return (
    <div className="teacher-sidebar">
      <h2 className="logo">XYZ School</h2>
      <nav>
        <ul>
          <li><Link to="/teacher/attendance">📋 Attendance</Link></li>
          <li><Link to="/teacher/timetable">📅 Timetable</Link></li>
          <li><Link to="/teacher/assignments">📝 Assignments</Link></li>
          <li><Link to="/teacher/notice">📢 Notice Board</Link></li>
        </ul>
      </nav>
    </div>
  );
}
