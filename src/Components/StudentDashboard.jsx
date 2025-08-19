// // import Insidefooter from "./insidefooter";
// import "./StudentDashboard.css";


// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// export default function StudentDashboard() {
//   const attendancePercentage = 78;

//   return (
//     <div className="dashboard">
//       <aside className="sidebar">
//         <h2 className="logo">Student</h2>
//         <ul className="studentdash">
//           <li>Home</li>
//           <li>Timetable</li>
//           <li>Homework</li>
//           <li>Results</li>
//           <li>Notices</li>
//         </ul>
//       </aside>

//       <div className="main-content">
//         <header className="topbar" style={{ backgroundColor:"#2c3e50" , color:"white"}}>
//           <span className="welcome">Welcome, Student</span>
//           <button className="logout-btn">Logout</button>
//         </header>

//         <div className="cards-container">
//           <div className="card hover-card">
//             <h3>Today's Timetable</h3>
//             <p className="hint">(Tap to View)</p>
//           </div>

//           <div className="card hover-card">
//             <h3>Homework</h3>
//             <p className="hint">(Tap to View)</p>
//           </div>

//           <div className="card">
//             <h3>Attendance</h3>
//             <div className="attendance-circle">
//               <CircularProgressbar
//                 value={attendancePercentage}
//                 text={`${ attendancePercentage} %`}
//                 styles={buildStyles({
//                   textColor: "#333",
//                   pathColor: "#4CAF50",
//                   trailColor: "#ddd",
//                 })}
//               />
//             </div>
//           </div>

//           <div className="card hover-card">
//             <h3>Notices</h3>
//             <p className="hint">(Tap to View)</p>
//           </div>
//         </div>
//       </div>
//       {/* <Insidefooter className="studentfooter"/> */}
//     </div>
//   );
// }

import "./StudentDashboard.css";

function StudentDashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Student ERP</h2>
        <nav>
          <a href="#">Home</a>
          <a href="#">Timetable</a>
          <a href="#">Homework</a>
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
          <div className="profile">
            <span>🔔</span>
            <span>👤</span>
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
