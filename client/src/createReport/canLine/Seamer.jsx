import React, { useState } from 'react';

const Seamer = () => {
  const [time, setTime] = useState('');
  const [shift, setShift] = useState('');
  const [cleaningCompleted, setCleaningCompleted] = useState('');
  const [visualInspectionCompleted, setVisualInspectionCompleted] = useState('');

  return (
    <div>
      <div>
        <h3>Time</h3>
        <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <div>
        <h3>Shift</h3>
        <input type="text" value={shift} onChange={(e) => setShift(e.target.value)} />
      </div>
      <div>
        <h3>Cleaning Completed</h3>
        <input type="text" value={cleaningCompleted} onChange={(e) => setCleaningCompleted(e.target.value)} />
      </div>
      <div>
        <h3>Visual Inspection Completed</h3>
        <input type="text" value={visualInspectionCompleted} onChange={(e) => setVisualInspectionCompleted(e.target.value)} />
      </div>
    </div>
  );
};

export default Seamer;
