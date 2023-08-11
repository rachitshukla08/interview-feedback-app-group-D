// src/components/InterviewTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InterviewTable = () => {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
   axios.get('http://localhost:5000/api/v1/interviews')
      .then(response => {
        console.log(response);
        setInterviews(response.data);
      })
      .catch(err => {
        console.error('Error fetching interviews:', err);
      });
  }, []);

  //console.log(interviews)
  return (
  
    <table className="inlin-table table-auto m-4 p-2 text-sm text-left text-gray-500 dark:text-gray-400 relative w-4/5">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-2">Interview ID</th>
            <th scope="col" className="px-4 py-2">Student ID</th>
            <th scope="col" className="px-4 py-2">Student Name</th>
            <th scope="col" className="px-4 py-2">Interviewer ID</th>
            <th scope="col" className="px-4 py-2">Interviewer Name</th>
            <th scope="col" className="px-4 py-2">Created</th>
            <th scope="col" className="px-4 py-2">Last Updated</th>
            <th scope="col" className="px-4 py-2">Overall Rating</th>
            <th scope="col" className="px-4 py-2">Feedback</th>
          </tr>
        </thead>
        <tbody>
          {interviews ? (interviews.map(interview => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={interview.interviewID}>
              <td className="px-6 py-4">{interview.interviewID}</td>
              <td className="px-6 py-4">{interview.intervieweeID}</td>
              <td className="px-6 py-4">{interview.intervieweeName}</td>
              <td className="px-6 py-4">{interview.interviewerID}</td>
              <td className="px-6 py-4">{interview.interviewerName}</td>
              <td className="px-6 py-4">{interview.createdAt}</td>
              <td className="px-6 py-4">{interview.updatedAt}</td>
              <td className="px-6 py-4">{interview.overallRating}</td>
              <td className="px-6 py-4">{interview.feedback}</td>
            </tr>
          ))
        ) : (
          <tr className='flex flex-col items-center justify-center'>
              <td colSpan="8">No interviews found</td>
            </tr>
        )}
        </tbody>
      </table>
    
  );
};

export default InterviewTable;
