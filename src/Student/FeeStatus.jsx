
import "../Components/StudentDashboard.css";

function FeeStatus({ paidTill, nextDue }) {
  return (
    <div className="card w-100">
      <h4>Fee Status</h4>
      <p className="green">Paid till {paidTill}</p>
      <p className="red">Next due: {nextDue}</p>
    </div>
  );
}

export default FeeStatus;
