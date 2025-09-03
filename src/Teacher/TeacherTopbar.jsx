import "./Teacher.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function TeacherTopbar() {
  const [time, setTime] = useState(new Date());
   useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
return () => clearInterval(timer); 
  }, []);
  const navigate = useNavigate();

  const handleBack = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      navigate("/"); 
    }
  };

  return (
    <header className="teacher-topbar">
      <h1>👩‍🏫 Faculty Dashboard</h1>
      <div className="teacher-profile">
        <span  className="time">
        {time.toLocaleTimeString()} 
      </span>
        <button className="logout-button" onClick={handleBack}>
          Back⬅
        </button>
      </div>
    </header>
  );
}
