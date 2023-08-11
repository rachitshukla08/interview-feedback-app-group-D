// app.js
const express = require('express');
const bodyParser = require('body-parser');
const interviewRoutes = require('./routes/interviewRoutes');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const {PORT, MONGODB_URI, FRONTEND_URI} = require('./config/envConfig');
const connectToMongoDB = require('./config/db')
const app = express();
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());
console.log(`Enabled CORS -> Allowed domain :: Frontend Server : ${FRONTEND_URI}`)

// Connect to MongoDB (Assuming your database is named 'RakshitFeedbackTesting')
connectToMongoDB.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});;

// API routes
app.use('/api/v1', interviewRoutes);

// Error handling middleware (assuming there is no custom error handling)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong on the server.' });
});

module.exports = app;
