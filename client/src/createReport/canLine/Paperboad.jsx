import React, { useState } from 'react';

const Paperboard = () => {
  const [time, setTime] = useState('');
  const [product, setProduct] = useState('');
  const [prodDateCodeBTLForWraps, setProdDateCodeBTLForWraps] = useState('');
  const [prodDateCodeBTLForCans, setProdDateCodeBTLForCans] = useState('');
  const [checkCodeLegible, setCheckCodeLegible] = useState('');
  const [lidCorrect, setLidCorrect] = useState('');
  const [firstOrLast, setFirstOrLast] = useState('');
  const [initials, setInitials] = useState('');
  const [comments, setComments] = useState('');

  return (
    <div>
      <div>
        <h3>Time</h3>
        <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <div>
        <h3>Product</h3>
        <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} />
      </div>
      <div>
        <h3>Production Date code & BTL for wraps</h3>
        <input type="text" value={prodDateCodeBTLForWraps} onChange={(e) => setProdDateCodeBTLForWraps(e.target.value)} />
      </div>
      <div>
        <h3>Production Date code & BTL for cans</h3>
        <input type="text" value={prodDateCodeBTLForCans} onChange={(e) => setProdDateCodeBTLForCans(e.target.value)} />
      </div>
      <div>
        <h3>Check for Present, Correct, and Legible Code</h3>
        <input type="text" value={checkCodeLegible} onChange={(e) => setCheckCodeLegible(e.target.value)} />
      </div>
      <div>
        <h3>Lid Correct (First or Last)</h3>
        <input type="text" value={lidCorrect} onChange={(e) => setLidCorrect(e.target.value)} />
      </div>
      <div>
        <h3>First or Last</h3>
        <input type="text" value={firstOrLast} onChange={(e) => setFirstOrLast(e.target.value)} />
      </div>
      <div>
        <h3>Initials</h3>
        <input type="text" value={initials} onChange={(e) => setInitials(e.target.value)} />
      </div>
      <div>
        <h3>Comments</h3>
        <input type="text" value={comments} onChange={(e) => setComments(e.target.value)} />
      </div>
    </div>
  );
};

export default Paperboard;


