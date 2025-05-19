import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Event Planner</h1>
      <div className="navigation">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/events">
          <p className="link">Events</p>
        </Link>
      </div>
    </header>
  );
}
