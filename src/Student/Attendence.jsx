
import { CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function AttendanceCard() {
  const attendance = 92;

  return (
    <div className="bg-white rounded-xl shadow p-4 text-center">
      <h4 className="font-semibold text-lg mb-4">📊 Attendance</h4>
      <div className="w-28 h-28 mx-auto">
        <CircularProgressbar
          value={attendance}
          text={`${attendance}%`}
          styles={buildStyles({
            pathColor: "#10B981",
            textColor: "#10B981",      
            trailColor: "#d1fae5",     
            textSize: "16px",
          })}
        />
      </div>
    </div>
  );
}
