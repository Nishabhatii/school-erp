import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const student = {
    name: "Amit Sharma",
    photo: process.env.PUBLIC_URL + "/boy.jpg", // ✅ public image
  };

  return (
    <aside className="sidebar" aria-label="Sidebar navigation">
      <h2 className="logo">Student ERP</h2>

      {/* Profile Section */}
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
        <Link to="/timetable">Timetable</Link>
        <Link to="/feeStatus">Fee</Link>
        <Link to="/homework">Homework</Link>
        <Link to="/notice">Notice</Link>
        <Link to="/fees">Fees</Link>
        <Link to="/library">Library</Link>
        <Link to="/notices">Notices</Link>
      </nav>
    </aside>
  );
}
