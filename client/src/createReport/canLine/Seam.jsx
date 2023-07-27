import React, { useState } from 'react';

function Seam () {
  const [seamSubmitted, setSeamSubmitted] = useState(false);
  const [isInfinity, setIsInfinity] = useState(false);
  const [explanation, setExplanation] = useState('');

  const handleSeamSubmit = () => {
    setSeamSubmitted(!seamSubmitted);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'isInfinity') {
      setIsInfinity(checked);
    }
  };

  return (
    <div>
      <h3>Seam Submitted</h3>
      <input
        type="checkbox"
        checked={seamSubmitted}
        onChange={handleSeamSubmit}
      />
      {seamSubmitted && (
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

export default Seam;

