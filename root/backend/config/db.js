const envConfig = require('./envConfig')
const mongoose = require('mongoose')

const connectToMongoDB = mongoose.connect(envConfig.MONGODB_URI || 'mongodb://localhost/RaskhitFeedbackTesting', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connectToMongoDB;