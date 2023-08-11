// middleware/authMiddleware.js
const envConfig = require('../config/envConfig')
const jwt = require('jsonwebtoken');

// Middleware function to verify admin's JWT token
const authenticateAdmin = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    // Verify the token and get the admin's ID from it
    const decoded = jwt.verify(token, envConfig.YOU_KNOW_WHO);
    req.adminId = decoded.adminId;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { authenticateAdmin };
