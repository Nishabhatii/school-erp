
import "./Login.css";

function NoticeBar() {
  return (
    <div className="notice-bar">
      <marquee behavior="alternate" direction="left" scrollamount="5">
        🔔 Admissions open for session 2025-26 | Annual Function scheduled for 30th July | Exam schedule will be announced soon!
      </marquee>
    </div>
  );
}

export default NoticeBar;