import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Sidebar navigation">
      <h2 className="logo">Student ERP</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/timetable">Timetable</Link>
        <Link to="/homework">Homework</Link>
        <Link to="/results">Results</Link>
        <Link to="/attendance">Attendance</Link>
        <Link to="/fees">Fees</Link>
        <Link to="/library">Library</Link>
        <Link to="/notices">Notices</Link>
      </nav>
    </aside>
  );
}
