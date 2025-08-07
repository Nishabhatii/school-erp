import Insidefooter from "./insidefooter";
import "./StudentDashboard.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function StudentDashboard() {
  const attendancePercentage = 78;

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2 className="logo">Student</h2>
        <ul className="studentdash">
          <li>Home</li>
          <li>Timetable</li>
          <li>Homework</li>
          <li>Results</li>
          <li>Notices</li>
        </ul>
      </aside>

      <div className="main-content">
        <header className="topbar">
          <span className="welcome">Welcome, Student</span>
          <button className="logout-btn">Logout</button>
        </header>

        <div className="cards-container">
          <div className="card hover-card">
            <h3>Today's Timetable</h3>
            <p className="hint">(Tap to View)</p>
          </div>

          <div className="card hover-card">
            <h3>Homework</h3>
            <p className="hint">(Tap to View)</p>
          </div>

          <div className="card">
            <h3>Attendance</h3>
            <div className="attendance-circle">
              <CircularProgressbar
                value={attendancePercentage}
                text={`${ attendancePercentage} %`}
                styles={buildStyles({
                  textColor: "#333",
                  pathColor: "#4CAF50",
                  trailColor: "#ddd",
                })}
              />
            </div>
          </div>

          <div className="card hover-card">
            <h3>Notices</h3>
            <p className="hint">(Tap to View)</p>
          </div>
        </div>
      </div>
      <Insidefooter className="studentfooter"/>
    </div>
  );
}
