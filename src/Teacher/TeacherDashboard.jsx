import { Routes, Route, Navigate } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import TeacherTopbar from "./TeacherTopbar";

import TAttendance from "./TAttendance";
import TTimetable from "./TTimetable";
import TAssignments from "./TAssignments";
import TNotice from "./TNotice";
import "./Teacher.css";

import TPrincipalMsg from "./TPrincipalMsg";
import TStudentRecord from "./TStudentRecord";
import TAbout from "./TAbout";
import TEvent from "./TEvent";
import TDashboardhome from "./TDashboardhome";

export default function TeacherDashboard() {
  return (
    <div className=" row">
      <div className="col-12 col-sm-3 col-md-3 col-lg-2 col-xl-2 sidebar-section pe-0">
      <TeacherSidebar />
      </div>

      <div className=" teacher-main col-12 col-sm-9 col-md-9 col-lg-10 col-xl-10">
        <TeacherTopbar />
        <main className="teacher-content">
            <Routes>
            <Route index element={<TDashboardhome />} />
            <Route path="attendance" element={<TAttendance />} />
            <Route path="timetable" element={<TTimetable />} />
            <Route path="assignments" element={<TAssignments />} />
            <Route path="notice" element={<TNotice />} />
            <Route path="principalmsg" element={<TPrincipalMsg />} />
            <Route path="studentrecord" element={<TStudentRecord />} />
            <Route path="event" element={<TEvent />} />
            <Route path="about" element={<TAbout />} />
            
            {/* Redirect unknown paths to index */}
            <Route path="*" element={<div>404 - Not Found</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
