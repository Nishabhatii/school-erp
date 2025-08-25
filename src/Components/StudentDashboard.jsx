
import "./StudentDashboard.css";
import { Link } from "react-router-dom";

import Attendence from "../Student/Attendence";

import FeeStatus from "../Student/FeeStatus";

function StudentDashboard() {
  const exams = [
    { subject: "Physics", date: "25 Aug" },
    { subject: "Math", date: "28 Aug" },
    { subject: "Chemistry", date: "30 Aug" },
  ];

  return (
    <div className="dashboard">
    
      <aside className="sidebar">
        <h2 className="logo">Student ERP</h2>
        <nav>
          <Link to="#">Home</Link>
          <Link to="/student-dashboard/Attendence">Attendence</Link>
          <Link to="/student-dashboard/timetable">Timetable</Link>
          <Link to="/student-dashboard/Homework">Homework</Link>
          <Link to="/student-dashboard/Notice">Notice</Link>
          <Link to="#">Results</Link>
          <Link to="#">Attendance</Link>
          <Link to="#">Fees</Link>
          <Link to="#">Library</Link>
          <Link to="#/Student/attendence">Notices</Link>
        </nav>
      </aside>

     
      <main className="main">
       
        <header className="topbar">
          <h3>Welcome, Student</h3>
          <div className="profile-icons">
            <div className="icon-wrapper"><span className="icon">🔔</span></div>
            <div className="icon-wrapper"><span className="icon">👤</span></div>
          </div>
        </header>

        {/* Cards Section */}
        <div className="cards">
          <div className="card">
            <h4>Today's Timetable</h4>
            <p>Click to view</p>
          </div>

          <div className="card">
            <h4>Homework</h4>
            <p>Click to view</p>
          </div>
<div className="card"><Attendence percentage={78} /></div>
          
       

        {/* Extra Section */}
        <div  >
         
          <FeeStatus paidTill="September" nextDue="October" />
        </div>
         </div>
      </main>
    </div>
  );
}

export default StudentDashboard;
