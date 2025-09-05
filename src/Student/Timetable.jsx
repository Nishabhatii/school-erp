export default function Timetable() {
  const timetableData = [
    { day: "Monday", subjects: ["Math", "English", "Physics", "Computer"] },
    { day: "Tuesday", subjects: ["Chemistry", "Biology", "Math", "History"] },
    { day: "Wednesday", subjects: ["English", "Geography", "Physics", "Sports"] },
    { day: "Thursday", subjects: ["Math", "Computer", "Biology", "Economics"] },
    { day: "Friday", subjects: ["Chemistry", "English", "Physics", "Arts"] },
    { day: "Saturday", subjects: ["Math", "Computer Lab", "General Knowledge", "Sports"] },
  ];

  return (
    <div style={{overflowX: "auto"}} className="container mt-4">
      <h2 className="text-center text-primary mb-4">Weekly Timetable</h2>
      
      <table className="table table-bordered table-striped text-center">
        <thead className="table-dark">
          <tr>
            <th>Day</th>
            <th>1st Period</th>
            <th>2nd Period</th>
            <th>3rd Period</th>
            <th>4th Period</th>
          </tr>
        </thead>
        <tbody>
          {timetableData.map((row, index) => (
            <tr key={index}>
              <td><strong>{row.day}</strong></td>
              {row.subjects.map((subj, i) => (
                <td key={i}>{subj}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
