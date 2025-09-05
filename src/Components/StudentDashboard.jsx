import "./StudentDashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Attendence from "../Student/Attendence";
import Timetable from "../Student/Timetable";
import Homework from "../Student/Homework";
import NoticeBar from "../Student/Notice";
import FeeStatus from "../Student/FeeStatus";
import Home from "../Student/Home";

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
    <div className="dashboard row w-100">
      
      <div className="sidebar col-12 col-sm-3 col-md-3 col-lg-2 col-xl-2 sidebar-section pe-0">
<div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-12">
        <h2 className="logo">Student ERP</h2>

        <div className="profile">
          <img
            src={student.photo}
            alt="student"
            className="profile-pic"
          />
          <h3 className="student-name">{student.name}</h3>
        </div>
</div>
<div className="ps-2 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <nav className="d-flex flex-row flex-md-column flex-sm-column flex-wrap justify-content-center ">
          <Link to="/Student-dashboard">Home</Link>
           <Link to="/Student-dashboard/timetable">Timetable</Link>
          <Link to="/Student-dashboard/homework">Homework</Link>
          <Link to="/Student-dashboard/attendance">Attendance</Link>
         
          <Link to="/Student-dashboard/notice">Notice</Link>
          <Link to="/Student-dashboard/results">Results</Link>
           <Link to="/Student-dashboard/library">Library</Link>
          <Link to="/Student-dashboard/fees">Fees</Link>
         
        </nav>
      </div>
      </div>

      {/* Main */}
              <main className="teacher-content col-12 col-sm-9 col-md-9 col-lg-10 col-xl-10">
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
            <Routes>
            <Route index element={<Home />} />
            <Route path="attendance" element={<Attendence />} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="homework" element={<Homework />} />
            <Route path="notice" element={<NoticeBar />} />
            <Route path="results" element={<FeeStatus />} />
            <Route path="fees" element={<FeeStatus />} />
            <Route path="library" element={<FeeStatus />} />

            {/* Redirect unknown paths to index */}
            <Route path="*" element={<div>404 - Not Found</div>} />
          </Routes>
        </main>
    </div>
  );
}

export default StudentDashboard;
