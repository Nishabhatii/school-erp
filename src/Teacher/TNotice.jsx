import { useState } from "react";
import "./Teacher.css";

export default function TNotice() {
  const [notices, setNotices] = useState([
    { id: 1, title: "Independence Day Celebration", date: "2025-08-15" },
    { id: 2, title: "PTM Scheduled", date: "2025-08-28" },
  ]);

  const [newNotice, setNewNotice] = useState("");
  const [noticeDate, setNoticeDate] = useState("");

  const addNotice = () => {
    if (newNotice.trim() && noticeDate) {
      setNotices([
        ...notices,
        { id: Date.now(), title: newNotice.trim(), date: noticeDate },
      ]);
      setNewNotice("");
      setNoticeDate("");
    }
  };

  return (
    <div className="page-box">
      <h2>Notice Board</h2>

      <div className="form-box">
        <input
          type="text"
          placeholder="Notice Title"
          value={newNotice}
          onChange={(e) => setNewNotice(e.target.value)}
        />
        <input
          type="date"
          value={noticeDate}
          onChange={(e) => setNoticeDate(e.target.value)}
        />
        <button className="btn-submit" onClick={addNotice}>
          Add Notice
        </button>
      </div>

      <ul className="notice-list">
        {notices.map((n) => (
          <li key={n.id}>
            <strong>{n.title}</strong> <span>({n.date})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
