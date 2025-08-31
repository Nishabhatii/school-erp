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
          {/* Routes (Pages) */}
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

          {/* Dashboard Summary / Extra Section */}
          <div className="extra">
            <TNotice paidTill="September" nextDue="October" />

            <TPrincipalMsg 
              name="Dr. A. Sharma"
              message="Together we can build a future full of knowledge and kindness."
              photo="https://yourdomain.com/principal.jpg"
            />

            <TStudentRecord
              students={[
                { roll: 1, name: "Riya Sharma", class: "10-A", attendance: 92 },
                { roll: 2, name: "Arjun Verma", class: "10-A", attendance: 85 },
                { roll: 3, name: "Kavya Singh", class: "10-B", attendance: 78 },
              ]}
            />

            <TEvent
              events={[
                { day: "05", month: "Sep", title: "Teacher’s Day", description: "Special assembly and celebration." },
                { day: "14", month: "Nov", title: "Children’s Day", description: "Fun activities and cultural programs." },
                { day: "25", month: "Dec", title: "Christmas Celebration", description: "Carol singing & gift exchange." },
              ]}
            />

x
          </div>
        </main> 
      </div>
    </div>
  );
}
