
import "./TDashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* 🔹 Topbar */}
      <div className="topbar">
        <div className="logo">School ERP</div>
        <div className="title">Teacher Dashboard</div>
        <div className="profile">
          <span className="icon">🔔</span>
          <span className="icon">👤</span>
        </div>
      </div>

      {/* 🔹 Stats Section */}
      <div className="stats">
        <div className="card">📚 Classes: <span>5</span></div>
        <div className="card">👩‍🎓 Students: <span>120</span></div>
        <div className="card">📝 Assignments Pending: <span>3</span></div>
        <div className="card">✅ Attendance: <span>110/120</span></div>
      </div>

      {/* 🔹 Extra Section (Schedule + Chart) */}
      <div className="extra">
        {/* Schedule */}
        <div className="box">
          <h3>📅 Upcoming Schedule</h3>
          <ul>
            <li>Maths - 10:00 AM</li>
            <li>Science - 12:00 PM</li>
            <li>English - 2:00 PM</li>
          </ul>
        </div>

        {/* Chart Placeholder */}
        <div className="box">
          <h3>📊 Performance Chart</h3>
          <div className="chart-placeholder">
            Chart will come here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
