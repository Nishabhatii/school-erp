
import "./Style/TAttendence.css";
import { useState } from "react";
export default function Attendance() {
  const [students] = useState([
    { id: 1, name: "Ravi" },
    { id: 2, name: "Priya" },
    { id: 3, name: "Aman" },
  ]);
  const [present, setPresent] = useState({});

  const toggleAttendance = (id) => {
    setPresent((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="attendance-page">
      <h2>Mark Attendance</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} 
            <button 
              className={present[s.id] ? "present" : "absent"}
              onClick={() => toggleAttendance(s.id)}
            >
              {present[s.id] ? "Present" : "Absent"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
