import React, { useState } from 'react';

function Shrink () {
  const [time, setTime] = useState('');
  const [product, setProduct] = useState('');
  const [btl, setBtl] = useState('');
  const [productionDateCode, setProductionDateCode] = useState('');
  const [checkCodeLegible, setCheckCodeLegible] = useState('');
  const [lidCorrect, setLidCorrect] = useState('');
  const [firstOrLastSample, setFirstOrLastSample] = useState('');
  const [operatorsInitials, setOperatorsInitials] = useState('');
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
        <h3>BTL (Bottle) Size</h3>
        <input type="text" value={btl} onChange={(e) => setBtl(e.target.value)} />
      </div>
      <div>
        <h3>Production Date Code</h3>
        <input type="text" value={productionDateCode} onChange={(e) => setProductionDateCode(e.target.value)} />
      </div>
      <div>
        <h3>Check for Present, Correct, and Legible Code</h3>
        <input type="text" value={checkCodeLegible} onChange={(e) => setCheckCodeLegible(e.target.value)} />
      </div>
      <div>
        <h3>Lid Correct (First or Last Sample)</h3>
        <input type="text" value={lidCorrect} onChange={(e) => setLidCorrect(e.target.value)} />
      </div>
      <div>
        <h3>First or Last Sample</h3>
        <input type="text" value={firstOrLastSample} onChange={(e) => setFirstOrLastSample(e.target.value)} />
      </div>
      <div>
        <h3>Operator's Initials</h3>
        <input type="text" value={operatorsInitials} onChange={(e) => setOperatorsInitials(e.target.value)} />
      </div>
      <div>
        <h3>Comments</h3>
        <input type="text" value={comments} onChange={(e) => setComments(e.target.value)} />
      </div>
    </div>
  );
};

export default Shrink;
