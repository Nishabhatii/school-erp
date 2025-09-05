import { Link } from "react-router-dom";
import "./Teacher.css";

export default function TeacherSidebar() {
  const teacher = {
    name: "Ms. Bhati",
    photo: process.env.PUBLIC_URL + "/nk.jpg", 
  };
  return (
    <div className="teacher-sidebar row" >
      {/* <h2 className="logo">XYZ School</h2> */}
      <div className="profile col-12 col-sm-10 col-md-12 col-lg-12 col-xl-12">
        <img
          src={teacher.photo}
          alt="student"
          className="profile-pic"
        />
        <h3 className="student-name">{teacher.name}</h3>
      </div>
      <nav className="ps-0 ms-0 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <ul className="d-flex flex-row flex-md-column flex-sm-column ps-0 ms-0 flex-wrap">
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
