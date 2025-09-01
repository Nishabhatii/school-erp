import { Link } from "react-router-dom";
import "./Teacher.css";

export default function TeacherSidebar() {
  return (
    <div className="teacher-sidebar">
      <h2 className="logo">XYZ School</h2>
      <nav>
        <ul>
          <li><Link to="/teacher/home">🏠Home</Link></li>
          <li><Link to="/teacher/principalmsg">👩‍💻Principal's Message</Link></li>
          <li><Link to="/teacher/attendance">📋 Attendance</Link></li>
          <li><Link to="/teacher/timetable">📅 Timetable</Link></li>
          <li><Link to="/teacher/assignments">📝 Assignments</Link></li>
          <li><Link to="/teacher/notice">📢 Notice Board</Link></li>
          
          <li><Link to="/teacher/studentrecord">👨‍🎓Student's Record</Link></li>
          <li><Link to="/teacher/event"> 🚀Upcoming Event</Link></li>
          <li><Link to="/teacher/about">💬 About</Link></li>

        </ul>
      </nav>
    </div>
  );
}
