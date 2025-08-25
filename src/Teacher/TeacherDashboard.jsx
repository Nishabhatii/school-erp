import { Routes, Route } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import TeacherTopbar from "./TeacherTopbar";
import TDashboardhome from "./TDashboardhome";  // 👈 New
import TAttendance from "./TAttendance";
import TTimetable from "./TTimetable";
import TAssignments from "./TAssignments";
import TNotice from "./TNotice";
import "./Teacher.css";





export default function TeacherDashboard() {
  return (
    <div className="teacher-layout">
      <TeacherSidebar />

      <div className="teacher-main">
        <TeacherTopbar />

        <main className="teacher-content">
          <Routes>
            <Route index element={<TDashboardhome />} />  
            <Route path="attendance" element={<TAttendance />} />
            <Route path="timetable" element={<TTimetable />} />
            <Route path="assignments" element={<TAssignments />} />
            <Route path="notice" element={<TNotice />} />
          </Routes>
          <div className="cards">
          <div className="card">
            <h4>Today's Timetable</h4>
            <p>Click to view</p>
          </div>

          <div className="card">
            <h4>Homework</h4>
            <p>Click to view</p>
          </div>

          < TAttendance percentage={78} />
        </div>

        {/* Extra Section */}
        <div className="extra">
         
          <TNotice paidTill="September" nextDue="October" />
        </div>
        </main>
      </div>
    </div>
  );
}
