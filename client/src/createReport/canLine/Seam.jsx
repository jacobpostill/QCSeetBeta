import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';

function Seam() {
  const [check, setCompletionStatus] = useState('completePrinted');
  const [submitted, setSubmitted] = useState(false);
  const [comment, setComment] = useState('');

  const handleCheckboxChange = (e) => {
    setCompletionStatus(e.target.value);
    // If a checkbox is selected, clear the explanation
    if (e.target.checked) {
      setExplanation('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reportId = window.location.pathname.split('/').pop();
    console.log(reportId)
    const reportData = {
      check,
      reportId,
      comment,
    };

    axios
      .post(`http://localhost:3001/canline/seamcheck/${reportId}`, reportData)
      .then((response) => {
        console.log(response.data);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div className="container">
      <Header />
      <h3>Run Sheet Submitted</h3>
      {submitted ? (
        <p>Report submitted</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="completionStatus"
              value="completePrinted"
              checked={check === 'completePrinted'}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label">Complete & Printed</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="completionStatus"
              value="completeNotPrinted"
              checked={check === 'completeNotPrinted'}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label">Complete but not Printed</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="completionStatus"
              value="notCompletePrinted"
              checked={check === 'notCompletePrinted'}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label">Not Complete or Printed</label>
          </div>
          {(check === 'completeNotPrinted' || check === 'notCompletePrinted') && (
            <div className="mb-3">
              <label className="form-label">If complete & printed, please explain:</label>
              <input
                className="form-control"
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
          )}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Seam;
