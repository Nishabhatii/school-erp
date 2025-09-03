import { Link } from "react-router-dom";
import "./Teacher.css";

export default function TeacherSidebar() {
  return (
    <div className="teacher-sidebar">
      <h2 className="logo">XYZ School</h2>
      <nav>
        <ul>
          <li><Link to="/TeacherDashboard/principalmsg">👩‍💻Principal's Message</Link></li>
          <li><Link to="/TeacherDashboard/attendance">📋 Attendance</Link></li>
          <li><Link to="/TeacherDashboard/timetable">📅 Timetable</Link></li>
          <li><Link to="/TeacherDashboard/assignments">📝 Assignments</Link></li>
          <li><Link to="/TeacherDashboard/notice">📢 Notice Board</Link></li>
          
          <li><Link to="/TeacherDashboard/studentrecord">👨‍🎓Student's Record</Link></li>
          <li><Link to="/TeacherDashboard/event"> 🚀Upcoming Event</Link></li>
          <li><Link to="/TeacherDashboard/about">💬 About</Link></li>

        </ul>
      </nav>
    </div>
  );
}
