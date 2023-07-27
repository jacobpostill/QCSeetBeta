import React, { useState } from 'react';

const BallCage = () => {
  const [time, setTime] = useState('');
  const [flavour, setFlavour] = useState('');
  const [frequencyOfCheck, setFrequencyOfCheck] = useState('');
  const [ballCageTightness, setBallCageTightness] = useState('');
  const [visualInspection, setVisualInspection] = useState('');
  const [initials, setInitials] = useState('');

  return (
    <div>
      <div>
        <h3>Time</h3>
        <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <div>
        <h3>Flavour</h3>
        <input type="text" value={flavour} onChange={(e) => setFlavour(e.target.value)} />
      </div>
      <div>
        <h3>Frequency of Check</h3>
        <input type="text" value={frequencyOfCheck} onChange={(e) => setFrequencyOfCheck(e.target.value)} />
      </div>
      <div>
        <h3>Ball Cage Tightness</h3>
        <input type="text" value={ballCageTightness} onChange={(e) => setBallCageTightness(e.target.value)} />
      </div>
      <div>
        <h3>Visual Inspection</h3>
        <input type="text" value={visualInspection} onChange={(e) => setVisualInspection(e.target.value)} />
      </div>
      <div>
        <h3>Initials</h3>
        <input type="text" value={initials} onChange={(e) => setInitials(e.target.value)} />
      </div>
    </div>
  );
};

export default BallCage;
