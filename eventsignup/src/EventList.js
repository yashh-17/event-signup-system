import React, { useEffect, useState } from 'react';
import { signupForEvent } from './api';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/events');
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleSignup = async (eventId) => {
    try {
      await signupForEvent(eventId);
      fetchEvents();
    } catch (error) {
      console.error('Error signing up for event:', error);
    }
  };

  return (
    <div>
      <h2>Upcoming Events</h2>
      {events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <li key={event._id}>
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.location}</p>
              <p>Signups: {event.signupCount}</p>
              <button onClick={() => handleSignup(event._id)}>Sign Up</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
};

export default EventList;
