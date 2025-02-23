import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/events`);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};

export const signupForEvent = async (eventId) => {
  try {
    const response = await axios.post(`${BASE_URL}/events/signup/${eventId}`);
    return response.data;
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
};
