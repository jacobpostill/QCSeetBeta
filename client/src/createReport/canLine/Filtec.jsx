 import React, { useState } from 'react';

const Filtec = () => {
  const [time, setTime] = useState('');
  const [verification, setVerification] = useState('');
  const [initials, setInitials] = useState('');

  return (
    <div>
      <div>
        <h3>Time</h3>
        <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <div>
        <h3>Verification</h3>
        <input type="text" value={verification} onChange={(e) => setVerification(e.target.value)} />
      </div>
      <div>
        <h3>Initials</h3>
        <input type="text" value={initials} onChange={(e) => setInitials(e.target.value)} />
      </div>
    </div>
  );
};

export default Filtec;
