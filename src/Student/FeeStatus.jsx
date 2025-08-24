
import "./FeeStatus.css";

function FeeStatus({ paidTill, nextDue }) {
  return (
    <div className="card">
      <h4>Fee Status</h4>
      <p className="green">Paid till {paidTill}</p>
      <p className="red">Next due: {nextDue}</p>
    </div>
  );
}

export default FeeStatus;
