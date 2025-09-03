import { Link } from "react-router-dom";
import "./Teacher.css";

export default function TeacherSidebar() {
  const teacher = {
    name: "Ms. Bhati",
    photo: process.env.PUBLIC_URL + "/nk.jpg", 
  };
  return (
    <div className="teacher-sidebar">
      {/* <h2 className="logo">XYZ School</h2> */}
      
      <div className="profile">
        <img
          src={teacher.photo}
          alt="student"
          className="profile-pic"
        />
        <h3 className="student-name">{teacher.name}</h3>
      </div>
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
