import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Sidebar navigation">
      <h2 className="logo">Student ERP</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/timetable">Timetable</Link>
        <Link to="/feeStatus">Fee</Link>
        <Link to="/homework">HomeWork</Link>
        <Link to="/notice">Attendance</Link>
        <Link to="/fees">Fees</Link>
        <Link to="/library">Library</Link>
        <Link to="/notices">Notices</Link>
      </nav>
    </aside>
  );
}
