// app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const interviewRoutes = require('./routes/interviewRoutes');
const cors = require('cors');
const corsOptions = require('./config/corsOptions')

const app = express();
app.use(cors(corsOptions));
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
console.log('Enabled CORS -> Allowed domain :: Frontend Server : http://localhost:5173')

// Connect to MongoDB (Assuming your database is named 'RakshitFeedbackTesting')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/RaskhitFeedbackTesting', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// API routes
app.use('/api', interviewRoutes);

// Error handling middleware (assuming there is no custom error handling)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong on the server.' });
});

module.exports = app;
