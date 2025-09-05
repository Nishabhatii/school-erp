
import "../Components/StudentDashboard.css";
import Attendence from "./Attendence";
import FeeStatus from "./FeeStatus";

function Home() {
  return (<div>
   <main className="main">
        <div className="cards row">
          <div className="card col-xs-12 col-sm-12 col-md-5 col-lg-3 col-xl-3">
            <h4>Today's Timetable</h4>
            <p>Click to view</p>
          </div>

          <div className="card col-xs-12 col-sm-12 col-md-5 col-lg-3 col-xl-3">
            <h4>Homework</h4>
            <p>Click to view</p>
          </div>

          <div className="card col-xs-12 col-sm-12 col-md-5 col-lg-3 col-xl-3">
            <Attendence percentage={78} />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-3 col-xl-3">
            <FeeStatus paidTill="September" nextDue="October" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
