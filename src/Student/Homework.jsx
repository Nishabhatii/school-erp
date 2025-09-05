export default function Homework() {
  const homeworkList = [
    { subject: "Math", task: "Solve chapter 5 exercises", due: "6 Sept" },
    { subject: "English", task: "Write essay on 'My Favorite Season'", due: "7 Sept" },
    { subject: "Science", task: "Prepare notes on Human Digestive System", due: "8 Sept" },
    { subject: "History", task: "Read chapter 3 and make a timeline", due: "9 Sept" },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary mb-4">Homework</h2>
      <table className="table table-bordered table-striped text-center">
        <thead className="table-dark">
          <tr>
            <th>Subject</th>
            <th>Task</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {homeworkList.map((hw, index) => (
            <tr key={index}>
              <td>{hw.subject}</td>
              <td>{hw.task}</td>
              <td>{hw.due}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
