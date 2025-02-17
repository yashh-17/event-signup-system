const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

// Route to get all events
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find(); // Fetch all events
    res.json(events); // Return the events as JSON
  } catch (err) {
    res.status(500).json({ message: err.message }); // Return error if any occurs
  }
});

// Route to sign up for an event (increment signupCount)
router.post('/events/signup/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id); // Find event by ID
    if (!event) {
      return res.status(404).json({ message: 'Event not found' }); // Event not found
    }

    // Increment the signup count
    event.signupCount += 1;
    await event.save(); // Save the updated event

    res.status(200).json({ message: 'Signup successful', event }); // Return success message and updated event
  } catch (err) {
    res.status(500).json({ message: err.message }); // Return error if any occurs
  }
});

module.exports = router;
