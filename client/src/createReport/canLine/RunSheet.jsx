import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';

const RunSheet = () => {
  const [isInfinity, setIsInfinity] = useState(true);
  const [explanation, setExplanation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'isInfinity') {
      setIsInfinity(checked);
      // If the Infinity checkbox is checked, clear the explanation
      if (checked) {
        setExplanation('');
      }
    } else if (name === 'isPaper') {
      setIsInfinity(!checked);
      // If the Paper checkbox is checked, clear the explanation
      if (checked) {
        setExplanation('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reportId = window.location.pathname.split('/').pop();
    const reportData = {
      check: isInfinity ? 'Infinity' : 'Paper',
      reportId,
      
    };

    axios
      .post(`http://localhost:3001/canline/runSheet/${reportId}`, reportData)
      .then((response) => {
        console.log(response.data); // Success message from the server
        setSubmitted(true); // Set submitted state to true
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        // Handle any errors here (e.g., show error message to the user)
      });
  };

  return (
    <div className="container mt-4">
                    <Header />

      <h3>Run Sheet Submitted</h3>
      {submitted ? (
        <p className="alert alert-success">Report submitted</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="isInfinity"
              checked={isInfinity}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label">Infinity</label>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="isPaper"
              checked={!isInfinity}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label">Paper</label>
          </div>
          {!isInfinity && (
            <div className="form-group">
              <label>If paper, please explain why you did not use infinity:</label>
              <input
                type="text"
                className="form-control"
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
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
};

export default RunSheet;