import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const student = {
    name: "Amit Sharma",
    photo: process.env.PUBLIC_URL + "/boy.jpg", 
  };

  return (
    <aside className="sidebar" aria-label="Sidebar navigation">
      {/* <h2 className="logo">Student ERP</h2> */}

     
      <div className="profile">
        <img
          src={student.photo}
          alt="student"
          className="profile-pic"
        />
        <h3 className="student-name">{student.name}</h3>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/student-dashboard/timetable">Timetable</Link>
        <Link to="/student-dashboard/feeStatus">Fee</Link>
        <Link to="/student-dashboard/homework">Homework</Link>
        <Link to="/student-dashboard/notice">Notice</Link>
        <Link to="/student-dashboard/fees">Fees</Link>
        <Link to="/student-dashboard/library">Library</Link>
        <Link to="/student-dashboard/notices">Notices</Link>
      </nav>
    </aside>
  );
}
