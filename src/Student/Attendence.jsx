

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./FeeStatus.css";

function Attendence({ percentage }) {
  return (
    <div className="card">
      <h4>Attendance</h4>
      <div className="progress-wrapper">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "#2c3e50",
            pathColor: percentage >= 75 ? "green" : "red",
            trailColor: "#eee",
          })}
        />
      </div>
    </div>
  );
}

export default Attendence;
