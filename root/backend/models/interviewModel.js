// interviewMdoel.js (models/interviewModel.js)
const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
  interviewID: { type: String, required: true, unique: true },
  interviewerID: { type: String, required: true },
  interviewerName: { type: String, required: true },
  feedback: { type: String },
  createdAt: { type: Date, default: Date.now },
  intervieweeID: { type: String, required: true },
  intervieweeName: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
  overallRating: { type: Number, required: true },
  interviewLink: { type: String, required: true }, // Interview link field
}, { collection: 'Interviews' });

const interviewModel = mongoose.model('Interview', interviewSchema);

module.exports = interviewModel;
