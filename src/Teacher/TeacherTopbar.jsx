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
<header className="teacher-topbar container-fluid w-100 py-2">
  <div className="row w-100 text-center text-sm-start">
    <div className="col-12 col-sm-4 d-flex justify-content-center justify-content-sm-start align-items-center">
      <h1>👩‍🏫 Faculty Dashboard</h1>
    </div>
    <div className="col-12 col-sm-8 d-flex justify-content-center justify-content-sm-end align-items-center">
      <div className="teacher-profile">
        <span className="time">{time.toLocaleTimeString()}</span>
        <button className="logout-button ms-2" onClick={handleBack}>
          Back⬅
        </button>
      </div>
    </div>
  </div>
</header>

  );
}
