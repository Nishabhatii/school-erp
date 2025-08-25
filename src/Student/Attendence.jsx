
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Attendence.css";

function Attendence({ percentage }) {
  return (
    <div className="attendance-card">  
      <h4>Attendance</h4>
      <div className="progress-wrapper">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textSize: "16px",
            pathColor: percentage > 75 ? "green" : "red",
            textColor: "#2c3e50",
            trailColor: "#eee",
          })}
        />
      </div>
    </div>
  );
}

export default Attendence;
