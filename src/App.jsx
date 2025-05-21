import "./App.css";
import EventInfo from "./components/EventInfo";
import EventsPage from "./components/EventsPage";
import EventSignup from "./components/EventSignup";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <section id="app">
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/events" element={<EventsPage />}></Route>
        <Route path="/events/:eventId" element={<EventInfo />}></Route>
        <Route path="/signup/:eventId" element={<EventSignup />}></Route>
      </Routes>
    </section>
  );
}

export default App;
