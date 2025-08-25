import "./Teacher.css";

export default function TTimetable() {
  const timetable = [
    { day: "Monday", subject: "Maths", time: "9:00 - 10:00" },
    { day: "Monday", subject: "Physics", time: "10:00 - 11:00" },
    { day: "Tuesday", subject: "Chemistry", time: "9:00 - 10:00" },
    { day: "Wednesday", subject: "Biology", time: "11:00 - 12:00" },
    { day: "Thursday", subject: "English", time: "12:00 - 1:00" },
    { day: "Friday", subject: "Computer Science", time: "2:00 - 3:00" },
  ];

  return (
    <div className="page-box">
      <h2>Class Timetable</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Subject</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((t, i) => (
            <tr key={i}>
              <td>{t.day}</td>
              <td>{t.subject}</td>
              <td>{t.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
