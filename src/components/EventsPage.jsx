import EventCard from "./EventCard";
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

export default function EventsPage() {
  return (
    <div className="container">
      <h2>Community Events</h2>
      {mockEvents.map((event) => (
        <EventCard key={event.id} event={event}></EventCard>
      ))}
    </div>
  );
}
