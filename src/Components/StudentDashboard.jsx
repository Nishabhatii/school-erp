import "./StudentDashboard.css";
import { Link, useNavigate } from "react-router-dom";

import Attendence from "../Student/Attendence";
import FeeStatus from "../Student/FeeStatus";

function StudentDashboard() {
  const navigate = useNavigate();

  const exams = [
    { subject: "Physics", date: "25 Aug" },
    { subject: "Math", date: "28 Aug" },
    { subject: "Chemistry", date: "30 Aug" },
  ];

  
  const student = {
    name: "Amit Sharma",
    photo: process.env.PUBLIC_URL + "/boy.jpg",
  };

  
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
     
      navigate("/"); 
    }
  };

  return (
    <div className="dashboard">
      
      <div className="sidebar">
        <h2 className="logo">Student ERP</h2>

        <div className="profile">
          <img
            src={student.photo}
            alt="student"
            className="profile-pic"
          />
          <h3 className="student-name">{student.name}</h3>
        </div>

        <nav>
          <Link to="/student-dashboard">Home</Link>
          <Link to="/student-dashboard/attendance">Attendance</Link>
          <Link to="/student-dashboard/timetable">Timetable</Link>
          <Link to="/student-dashboard/homework">Homework</Link>
          <Link to="/student-dashboard/notice">Notice</Link>
          <Link to="/student-dashboard/results">Results</Link>
          <Link to="/student-dashboard/fees">Fees</Link>
          <Link to="/student-dashboard/library">Library</Link>
        </nav>
      </div>

      {/* Main */}
      <main className="main">
        <header className="topbar">
          <h3>Welcome, {student.name}</h3>
          <div className="profile-icons">
            <div className="icon-wrapper">
              <span className="icon">🔔</span>
            </div>

            
            <div className="icon-wrapper" onClick={handleLogout}>
              <span className="icon">Back⬅</span>
            </div>
          </div>
        </header>

        <div className="cards">
          <div className="card">
            <h4>Today's Timetable</h4>
            <p>Click to view</p>
          </div>

          <div className="card">
            <h4>Homework</h4>
            <p>Click to view</p>
          </div>

          <div className="card">
            <Attendence percentage={78} />
          </div>

          <div>
            <FeeStatus paidTill="September" nextDue="October" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;
