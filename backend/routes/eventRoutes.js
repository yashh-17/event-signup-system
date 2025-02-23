const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

router.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/events/signup/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    event.signupCount += 1;
    await event.save();

    res.status(200).json({ message: 'Signup successful', event });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
