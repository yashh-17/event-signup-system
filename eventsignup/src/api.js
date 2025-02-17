import axios from 'axios';

// Base URL for API calls
const BASE_URL = 'http://localhost:5000/api';

// API to fetch all events
export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/events`);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];  // Return an empty array in case of error
  }
};

// API to signup for an event
export const signupForEvent = async (eventId) => {
  try {
    const response = await axios.post(`${BASE_URL}/events/signup/${eventId}`);
    return response.data;
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;  // Rethrow the error for handling in the caller
  }
};
