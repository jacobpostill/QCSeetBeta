import React, { useState } from 'react';

function Rinser () {
  const [time, setTime] = useState('');
  const [shift, setShift] = useState('');
  const [productCode, setProductCode] = useState('');
  const [flavor, setFlavor] = useState('');
  const [rinserOperational, setRinserOperational] = useState('');
  const [initials, setInitials] = useState('');
  const [computerOn, setComputerOn] = useState('');
  const [readings, setReadings] = useState('');

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
        <h3>Product Code</h3>
        <input type="text" value={productCode} onChange={(e) => setProductCode(e.target.value)} />
      </div>
      <div>
        <h3>Flavor</h3>
        <input type="text" value={flavor} onChange={(e) => setFlavor(e.target.value)} />
      </div>
      <div>
        <h3>Rinser Operational</h3>
        <input type="text" value={rinserOperational} onChange={(e) => setRinserOperational(e.target.value)} />
      </div>
      <div>
        <h3>Initials</h3>
        <input type="text" value={initials} onChange={(e) => setInitials(e.target.value)} />
      </div>
      <div>
        <h3>Computer On</h3>
        <input type="text" value={computerOn} onChange={(e) => setComputerOn(e.target.value)} />
      </div>
      <div>
        <h3>Readings Showing</h3>
        <input type="text" value={readings} onChange={(e) => setReadings(e.target.value)} />
      </div>
    </div>
  );
};

export default Rinser;
