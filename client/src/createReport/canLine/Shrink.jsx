import React, { useState } from 'react';

function Shrink () {
  const [time, setTime] = useState('');
  const [flavor, setFlavor] = useState('');
  const [appearance1, setAppearance1] = useState('');
  const [appearance2, setAppearance2] = useState('');
  const [appearance3, setAppearance3] = useState('');
  const [shrink1, setShrink1] = useState('');
  const [shrink2, setShrink2] = useState('');
  const [shrink3, setShrink3] = useState('');
  const [hicone1, setHicone1] = useState('');
  const [hicone2, setHicone2] = useState('');
  const [hicone3, setHicone3] = useState('');
  const [tray1, setTray1] = useState('');
  const [tray2, setTray2] = useState('');
  const [tray3, setTray3] = useState('');
  const [bonded1, setBonded1] = useState('');
  const [bonded2, setBonded2] = useState('');
  const [bonded3, setBonded3] = useState('');
  const [sealed1, setSealed1] = useState('');
  const [sealed2, setSealed2] = useState('');
  const [sealed3, setSealed3] = useState('');
  const [legable1, setLegable1] = useState('');
  const [legable2, setLegable2] = useState('');
  const [legable3, setLegable3] = useState('');
  const [burn1, setBurn1] = useState('');
  const [burn2, setBurn2] = useState('');
  const [burn3, setBurn3] = useState('');
  const [btl, setBtl] = useState('');
  const [proDateCode, setProDateCode] = useState('');
  const [checks, setChecks] = useState(false);
  const [lid, setLid] = useState(false);
  const [firstLast, setFirstLast] = useState('');
  const [initials, setInitials] = useState('');
  const [comments, setComments] = useState('');
 

  return (
      <div>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter Time"
        />
      </div>
      <div>
        <input
          type="text"
          value={flavor}
          onChange={(e) => setFlavor(e.target.value)}
          placeholder="Enter Flavor"
        />
      </div>
      <div>
        <input
          type="text"
          value={appearance1}
          onChange={(e) => setAppearance1(e.target.value)}
          placeholder="Enter Appearance 1"
        />
      </div>
      <div>
        <input
          type="text"
          value={appearance2}
          onChange={(e) => setAppearance2(e.target.value)}
          placeholder="Enter Appearance 2"
        />
      </div>
      <div>
        <input
          type="text"
          value={appearance3}
          onChange={(e) => setAppearance3(e.target.value)}
          placeholder="Enter Appearance 3"
        />
           <div>
      <div>
        <input
          type="text"
          value={shrink1}
          onChange={(e) => setShrink1(e.target.value)}
          placeholder="Enter Shrink 1"
        />
      </div>
      <div>
        <input
          type="text"
          value={shrink2}
          onChange={(e) => setShrink2(e.target.value)}
          placeholder="Enter Shrink 2"
        />
      </div>
      <div>
        <input
          type="text"
          value={shrink3}
          onChange={(e) => setShrink3(e.target.value)}
          placeholder="Enter Shrink 3"
        />
      </div>
      <div>
        <input
          type="text"
          value={hicone1}
          onChange={(e) => setHicone1(e.target.value)}
          placeholder="Enter Hicone 1"
        />
      </div>
      <div>
        <input
          type="text"
          value={hicone2}
          onChange={(e) => setHicone2(e.target.value)}
          placeholder="Enter Hicone 2"
        />
      </div>
      <div>
        <input
          type="text"
          value={hicone3}
          onChange={(e) => setHicone3(e.target.value)}
          placeholder="Enter Hicone 3"
        />
      </div>
      <div>
        <input
          type="text"
          value={tray1}
          onChange={(e) => setTray1(e.target.value)}
          placeholder="Enter Tray 1"
        />
      </div>
      <div>
        <input
          type="text"
          value={tray2}
          onChange={(e) => setTray2(e.target.value)}
          placeholder="Enter Tray 2"
        />
      </div>
      <div>
        <input
          type="text"
          value={tray3}
          onChange={(e) => setTray3(e.target.value)}
          placeholder="Enter Tray 3"
        />
      </div>
      <div>
        <input
          type="text"
          value={bonded1}
          onChange={(e) => setBonded1(e.target.value)}
          placeholder="Enter Bonded 1"
        />
      </div>
      <div>
        <input
          type="text"
          value={bonded2}
          onChange={(e) => setBonded2(e.target.value)}
          placeholder="Enter Bonded 2"
        />
      </div>
      <div>
        <input
          type="text"
          value={bonded3}
          onChange={(e) => setBonded3(e.target.value)}
          placeholder="Enter Bonded 3"
        />
      </div>
      <div>
        <input
          type="text"
          value={sealed1}
          onChange={(e) => setSealed1(e.target.value)}
          placeholder="Enter Sealed 1"
        />
      </div>
      <div>
        <input
          type="text"
          value={sealed2}
          onChange={(e) => setSealed2(e.target.value)}
          placeholder="Enter Sealed 2"
        />
      </div>
      <div>
        <input
          type="text"
          value={sealed3}
          onChange={(e) => setSealed3(e.target.value)}
          placeholder="Enter Sealed 3"
        />
      </div>
      <div>
        <input
          type="text"
          value={legable1}
          onChange={(e) => setLegable1(e.target.value)}
          placeholder="Enter Legable 1"
        />
      </div>
      <div>
        <input
          type="text"
          value={legable2}
          onChange={(e) => setLegable2(e.target.value)}
          placeholder="Enter Legable 2"
        />
      </div>
      <div>
        <input
          type="text"
          value={legable3}
          onChange={(e) => setLegable3(e.target.value)}
          placeholder="Enter Legable 3"
        />
      </div>
      </div>
            <div>
            <input
              type="text"
              value={burn1}
              onChange={(e) => setBurn1(e.target.value)}
              placeholder="Enter Burn 1"
            />
          </div>
          <div>
            <input
              type="text"
              value={burn2}
              onChange={(e) => setBurn2(e.target.value)}
              placeholder="Enter Burn 2"
            />
          </div>
          <div>
            <input
              type="text"
              value={burn3}
              onChange={(e) => setBurn3(e.target.value)}
              placeholder="Enter Burn 3"
            />
          </div>
      <div>
        <input
          type="text"
          value={btl}
          onChange={(e) => setBtl(e.target.value)}
          placeholder="Enter Btl"
        />
      </div>
      <div>
        <input
          type="text"
          value={proDateCode}
          onChange={(e) => setProDateCode(e.target.value)}
          placeholder="Enter Pro Date Code"
        />
      </div>
      <div>
        <input
          type="checkbox"
          checked={checks}
          onChange={(e) => setChecks(e.target.checked)}
        />
        <label>Checks</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={lid}
          onChange={(e) => setLid(e.target.checked)}
        />
        <label>Lid</label>
      </div>
      <div>
        <input
          type="text"
          value={firstLast}
          onChange={(e) => setFirstLast(e.target.value)}
          placeholder="Enter FirstLast"
        />
      </div>
      <div>
        <input
          type="text"
          value={initials}
          onChange={(e) => setInitials(e.target.value)}
          placeholder="Enter Initials"
        />
      </div>
      <div>
        <input
          type="text"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Enter Comments"
        />
      </div>
    </div>
  );
};

export default Shrink;
