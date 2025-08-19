
import "./Style/TTimetable.css";

export default function Timetable() {
  const timetable = [
    { day: "Monday", subject: "Physics", time: "9:00 AM" },
    { day: "Tuesday", subject: "Maths", time: "10:00 AM" },
    { day: "Wednesday", subject: "Chemistry", time: "11:00 AM" },
  ];

  return (
    <div className="timetable-page">
      <h2>Class Timetable</h2>
      <table>
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
