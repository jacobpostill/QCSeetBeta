import React, { useState } from 'react';

const RunSheet = () => {
  const [runSheetSubmitted, setRunSheetSubmitted] = useState(false);
  const [isInfinity, setIsInfinity] = useState(false);
  const [explanation, setExplanation] = useState('');

  const handleRunSheetSubmit = () => {
    setRunSheetSubmitted(!runSheetSubmitted);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'isInfinity') {
      setIsInfinity(checked);
    }
  };

  return (
    <div>
      <h3>Run Sheet Submitted</h3>
      <input
        type="checkbox"
        checked={runSheetSubmitted}
        onChange={handleRunSheetSubmit}
      />
      {runSheetSubmitted && (
        <div>
          <label>
            <input
              type="checkbox"
              name="isInfinity"
              checked={isInfinity}
              onChange={handleCheckboxChange}
            />
            Infinity
          </label>
          <label>
            <input
              type="checkbox"
              name="isPaper"
              checked={!isInfinity}
              onChange={handleCheckboxChange}
            />
            Paper
          </label>
          {!isInfinity && (
            <div>
              <p>If paper, please explain why you did not use infinity:</p>
              <input
                type="text"
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RunSheet;
