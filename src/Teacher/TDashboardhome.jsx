export default function TDashboardHome() {
  const attendance = "Present"; 
  const todayTimetable = [
    { period: "1st", subject: "Physics", time: "9:00 - 9:45" },
    { period: "2nd", subject: "Maths", time: "10:00 - 10:45" },
    { period: "3rd", subject: "Chemistry", time: "11:00 - 11:45" },
  ];

  const principalMessage =
    "Dear Teachers, please keep encouraging students towards self-learning and discipline.";

  const extraNote = "Reminder: Submit lesson plan by Friday.";

  return (
    <div className="dashboard-home">
      {/* Attendance */}
      <div className="card">
        <h2>Today's Attendance</h2>
        <p>Status: <strong>{attendance}</strong></p>
      </div>

      {/* Timetable */}
      <div className="card">
        <h2>Today's Timetable</h2>
        <ul>
          {todayTimetable.map((item, index) => (
            <li key={index}>
              <strong>{item.period}:</strong> {item.subject} ({item.time})
            </li>
          ))}
        </ul>
      </div>

      {/* Principal Message */}
      <div className="card">
        <h2>Principal's Message</h2>
        <p>{principalMessage}</p>
      </div>

      {/* Extra Note */}
      <div className="card">
        <h2>Extra Note</h2>
        <p>{extraNote}</p>
      </div>
    </div>
  );
}
