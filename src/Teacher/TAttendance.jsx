import { useState } from "react";
import "./Teacher.css";

export default function TAttendance() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman Sharma", present: false },
    { id: 2, name: "Riya Verma", present: false },
    { id: 3, name: "Mohit Singh", present: false },
    { id: 4, name: "Priya Gupta", present: false },
  ]);

  const toggleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, present: !s.present } : s))
    );
  };

  return (
    <div className="page-box">
      <h2>Mark Attendance</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={s.id}>
              <td>{i + 1}</td>
              <td>{s.name}</td>
              <td>
                <button
                  className={s.present ? "btn-present" : "btn-absent"}
                  onClick={() => toggleAttendance(s.id)}
                >
                  {s.present ? "Present" : "Absent"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
