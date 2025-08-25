
import "../Components/StudentDashboard.css";

function FeeStatus({ paidTill, nextDue }) {
  return (<div className="cards">
    <div className="card">
      <h4>Fee Status</h4>
      <p className="green">Paid till {paidTill}</p>
      <p className="red">Next due: {nextDue}</p>
    </div>
    </div>
  );
}

export default FeeStatus;
