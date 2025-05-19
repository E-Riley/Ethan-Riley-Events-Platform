import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>
        {event.date} at {event.location}
      </p>
      <Link to={`/events/${event.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
}
