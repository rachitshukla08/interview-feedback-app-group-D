// interviewController.js (controllers/interviewController.js)
const Interview = require('../models/interviewModel');

// Controller function to get all interviews

exports.createInterview = async (req, res) => {
  try {
    const newInterview = new Interview(req.body);
    await newInterview.save();
    res.status(201).json(newInterview);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create interview', err });
  }
};

exports.getAllInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find().sort({dateTime: -1});
    res.status(200).json(interviews);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch interviews', err });
  }
};

exports.getAllInterviewsWithPagination = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const pageNumber = parseInt(page);
    const itemsPerPage = parseInt(limit);

    const skip = (pageNumber - 1) * itemsPerPage;
    const totalInterviews = await Interview.countDocuments();
    const interviews = await Interview.find()
      .skip(skip)
      .limit(itemsPerPage)
      .sort({ dateTime: -1 });

    res.status(200).json({
      totalInterviews,
      totalPages: Math.ceil(totalInterviews / itemsPerPage),
      interviews,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

exports.getInterviewById = async (req,res) => {
  try {
    const interview = await Interview.findById(req.params.id);
    if(!interview) {
      return res.status(404).json({ message: 'Interview not found' });
    }
    res.status(200).json(interview);
  } catch(err) {
    res.status(500).json({ message: 'Failed to fetch interview', err });
  }
};

exports.updateInterview = async (req, res) => {
  try {
    const interview = await Interview.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if(!interview) {
      return res.status(404).json({ message: 'Interview not found' });
    }
    //await interview.save();
    res.status(200).json(interview);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch interview', err });
  }
};

exports.deleteInterview = async (req, res) => {
  try {
    const interview = await Interview.findByIdAndDelete(req.params.id);
    if(!interview) {
      return res.status(404).json({ message: 'Interview not found' });
    }
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete interview', err });
  }
};