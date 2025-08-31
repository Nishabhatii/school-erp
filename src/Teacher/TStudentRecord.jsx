import "./Teacher.css";

export default function TStudentRecord() {
  const students = [
    { roll: 1, name: "Riya Sharma", class: "10-A", attendance: 92 },
    { roll: 2, name: "Arjun Verma", class: "10-A", attendance: 85 },
    { roll: 3, name: "Kavya Singh", class: "10-B", attendance: 78 },
    { roll: 4, name: "Manav Mehta", class: "9-B", attendance: 88 },
    { roll: 5, name: "Sanya Kapoor", class: "8-A", attendance: 95 },
    { roll: 6, name: "Rohit Yadav", class: "7-C", attendance: 80 },
  ];

  return (
    <div className="student-record-card">
      <h2 style={{ color: "#3e994a" }}>📖 Student Records</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>Roll No.</th>
            <th>Name</th>
            <th>Class</th>
            <th>Attendance (%)</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu, index) => (
            <tr key={index}>
              <td>{stu.roll}</td>
              <td>{stu.name}</td>
              <td>{stu.class}</td>
              <td>{stu.attendance}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
