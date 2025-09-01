import "./Teacher.css";
import { useNavigate } from "react-router-dom";

export default function TeacherTopbar() {
  const navigate = useNavigate();

  const handleBack = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      navigate("/"); 
    }
  };

  return (
    <header className="teacher-topbar">
      <h1>Teacher Dashboard</h1>
      <div className="teacher-profile">
        <span className="profile-name">👩‍🏫 Komal Madam</span>
        <button className="logout-button" onClick={handleBack}>
          Back⬅
        </button>
      </div>
    </header>
  );
}
