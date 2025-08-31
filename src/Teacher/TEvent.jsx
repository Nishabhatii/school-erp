// TEvent.jsx
export default function TEvent({ events }) {
  return (
    <div className="event-card">
      <h3>Upcoming Events</h3>
      {events && events.length > 0 ? (
        <ul className="event-list">
          {events.map((ev, index) => (
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
