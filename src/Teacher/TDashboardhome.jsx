
import "./Teacher.css";

export default function TDashboardhome() {
  return (
    <div className="teacher-dashboard">
      {/* Welcome Header */}
      <div className="welcome-card">
        <h2>👋 Welcome, Ms. Sharma</h2>
        <p className="principal-msg">
          "Keep inspiring students every day!" – Principal
        </p>
      </div>

      <div className="dashboard-grid">
        {/* Today's Schedule */}
        <div className="card">
          <h3>📅 Today’s Schedule</h3>
          <ul>
            <li>1st Period: Physics (10A)</li>
            <li>2nd Period: Physics (11B)</li>
            <li><b>Next Class:</b> 12B Chemistry Lab</li>
          </ul>
        </div>

        {/* Attendance */}
        <div className="card">
          <h3>✅ Attendance</h3>
          <p>10A attendance pending</p>
          <button className="btn">Mark Attendance</button>
        </div>

        {/* Tasks */}
        <div className="card">
          <h3>📝 Tasks</h3>
          <ul>
            <li>Check Assignment 3 (10B)</li>
            <li>Upload Quiz Marks (11A)</li>
          </ul>
        </div>

        {/* Notices */}
        <div className="card">
          <h3>📢 Notices</h3>
          <ul>
            <li>Staff Meeting at 3 PM</li>
            <li>Submit syllabus completion report</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
