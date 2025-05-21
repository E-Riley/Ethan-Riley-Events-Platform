import { useState } from "react";
import { useParams } from "react-router-dom";

export default function EventSignup() {
  const { eventId } = useParams();
  const [submitted, setSubmitted] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleNameChange(e) {
    setSubmitted(false);
    setFormName(e.target.value);
  }

  function handleEmailChange(e) {
    setSubmitted(false);
    setFormEmail(e.target.value);
  }

  if (submitted) {
    return (
      <div>
        <h2>Thank you for signing up!</h2>
        <p>You can now add this event to your Google Calendar.</p>
        <button className="btn">Add to Google Calendar</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Sign Up for Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formName}
            onChange={handleNameChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formEmail}
            onChange={handleEmailChange}
            required
          />
        </label>
        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}
