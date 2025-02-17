const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes'); // Assuming event routes are in a separate file

const app = express();
const PORT = 5000;

// CORS setup to allow cross-origin requests from React app (localhost:3000)
app.use(cors({
  origin: 'http://localhost:3000', // Allow only requests from this origin (your frontend)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  credentials: true, // If you want to allow cookies to be sent with requests
}));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/eventSignup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process if the connection fails
  });

// Middleware to parse JSON data
app.use(express.json());

// Use event routes
app.use('/api', eventRoutes);

// Basic route to test the server
app.get('/', (req, res) => {
  res.send('Event Signup Server is Running');
});

// Error handling middleware (optional but good practice)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
