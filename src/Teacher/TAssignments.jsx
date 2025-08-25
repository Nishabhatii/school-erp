import { useState } from "react";
import "./Teacher.css";

export default function TAssignments() {
  const [assignments, setAssignments] = useState([
    { id: 1, title: "Maths Homework", due: "2025-08-30" },
    { id: 2, title: "Physics Lab Report", due: "2025-09-02" },
  ]);

  const [newAssignment, setNewAssignment] = useState("");
  const [dueDate, setDueDate] = useState("");

  const addAssignment = () => {
    if (newAssignment && dueDate) {
      setAssignments([
        ...assignments,
        { id: Date.now(), title: newAssignment, due: dueDate },
      ]);
      setNewAssignment("");
      setDueDate("");
    }
  };

  return (
    <div className="page-box">
      <h2>Assignments</h2>

      <div className="form-box">
        <input
          type="text"
          placeholder="Assignment Title"
          value={newAssignment}
          onChange={(e) => setNewAssignment(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button className="btn-submit" onClick={addAssignment}>Add</button>
      </div>

      <table className="attendance-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((a) => (
            <tr key={a.id}>
              <td>{a.title}</td>
              <td>{a.due}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
