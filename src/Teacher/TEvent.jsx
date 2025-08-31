import "./Teacher.css";

export default function TEvent({ events }) {
  const defaultEvents = [
    { day: "05", month: "Sep", title: "Teacher's Day Celebration", description: "A special assembly and cultural program." },
    { day: "15", month: "Aug", title: "Independence Day", description: "Flag hoisting and cultural activities." }
  ];

  const eventList = events && events.length > 0 ? events : defaultEvents;

  return (
    <div className="event-card">
      <h3>Upcoming Events</h3>
      {eventList.length > 0 ? (
        <ul className="event-list">
          {eventList.map((ev, index) => (
            <li key={index} className="event-item">
              <div className="event-date">
                <span className="day">{ev.day}</span>
                <span className="month">{ev.month}</span>
              </div>
              <div className="event-details">
                <h4>{ev.title}</h4>
                <p>{ev.description}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No events scheduled</p>
      )}
    </div>
  );
}
