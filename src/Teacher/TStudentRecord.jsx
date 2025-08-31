// TStudentRecord.jsx
export default function TStudentRecord({ students }) {
  return (
    <div className="student-record-card">
      <h3>Student Records</h3>
      <table className="student-table">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Class</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students && students.length > 0 ? (
            students.map((s, index) => (
              <tr key={index}>
                <td>{s.roll}</td>
                <td>{s.name}</td>
                <td>{s.class}</td>
                <td>{s.attendance}%</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No student data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
