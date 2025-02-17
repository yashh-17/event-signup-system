import React from 'react';
import { signupForEvent } from './api';

const EventItem = ({ event }) => {
  const handleSignup = async () => {
    const updatedEvent = await signupForEvent(event._id);
    alert(`Successfully signed up! Total signups: ${updatedEvent.signupCount}`);
  };

  return (
    <div>
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p>Signup Count: {event.signupCount}</p>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default EventItem;
