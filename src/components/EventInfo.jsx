import { useParams } from "react-router-dom";

const mockEvents = [
  {
    id: 1,
    title: "Community Clean-Up",
    date: "2025-06-10",
    location: "Park",
  },
  {
    id: 2,
    title: "Farmer's Market",
    date: "2025-06-15",
    location: "Street",
  },
];

export default function EventInfo() {
  const { eventId } = useParams();

  const event = mockEvents[eventId - 1];
  return (
    <div>
      <h2>{event.title}</h2>
      <p>Date:{event.date}</p>
      <p>Location: {event.location}</p>
    </div>
  );
}
