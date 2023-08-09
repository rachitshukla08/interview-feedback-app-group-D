// middleware/authMiddleware.js
require('dotenv').config();
const jwt = require('jsonwebtoken');

// Middleware function to verify admin's JWT token
const authenticateAdmin = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    // Verify the token and get the admin's ID from it
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.adminId = decoded.adminId;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { authenticateAdmin };
