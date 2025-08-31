import { Routes, Route } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import TeacherTopbar from "./TeacherTopbar";

import TAttendance from "./TAttendance";
import TTimetable from "./TTimetable";
import TAssignments from "./TAssignments";
import TNotice from "./TNotice";
import "./Teacher.css";
import TDashboardHome from "./TDashboardhome";
import TPrincipalMsg from "./TPrincipalMsg";
import TStudentRecord from "./TStudentRecord";
import TAbout from "./TAbout";
import TEvent from "./TEvent";

export default function TeacherDashboard() {
  return (
    <div className="teacher-layout">
      <TeacherSidebar />

      <div className="teacher-main">
        <TeacherTopbar />

        <main className="teacher-content">
          <Routes>
            <Route index element={<TDashboardHome />} />  
            <Route path="attendance" element={<TAttendance />} />
            <Route path="timetable" element={<TTimetable />} />
            <Route path="assignments" element={<TAssignments />} />
            <Route path="notice" element={<TNotice />} />
            <Route path="principalmsg" element={<TPrincipalMsg />} />
            <Route path="studentrecord" element={<TStudentRecord />} />
            <Route path="event" element={<TEvent />} />
            <Route path="about" element={<TAbout />} />
          </Routes>


        </main> 
      </div>
    </div>
  );
}
