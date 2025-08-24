import "./StudentDashboard.css";

import { Link } from "react-router-dom";
function StudentDashboard() {
  

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Student ERP</h2>
        <nav>
          <a href="#">Home</a>
          

<Link to="/student-dashboard/Attendence">Attendence</Link>
<Link to="/student-dashboard/timetable">Timetable</Link>
<Link to="/student-dashboard/Homework">Homework</Link>
<Link to="/student-dashboard/Notice">Notice</Link>

         
          <a href="#">Results</a>
          <a href="#">Attendance</a>
          <a href="#">Fees</a>
          <a href="#">Library</a>
          <a href="#">Notices</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main">
        {/* Topbar */}
        <header className="topbar">
          <h3>Welcome, Student</h3>
          <div className="profile-icons">
            <div className="icon-wrapper" >
              <span className="icon">🔔</span>
             
            </div>
            <div className="icon-wrapper" >
              <span className="icon">👤</span>
              
            </div>
          </div>
        </header>

        {/* Cards */}
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
            <h4>Attendance</h4>
            <p>78% Present</p>
          </div>
        </div>

        {/* Extra Section */}
        <div className="extra">
          <div className="box">
            <h4>Upcoming Exams</h4>
            <ul>
              <li>Physics – 25 Aug</li>
              <li>Math – 28 Aug</li>
              <li>Chemistry – 30 Aug</li>
            </ul>
          </div>

          <div className="box">
            <h4>Fee Status</h4>
            <p className="green">Paid till September</p>
            <p className="red">Next due: October</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;
