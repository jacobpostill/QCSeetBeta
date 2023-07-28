import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
const Shrink = () => {
  const [id, setId] = useState('');
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

  // Helper function to handle checkbox click
  const handleCheckboxClick = (field) => {
    switch (field) {
      case 'shrink':
        setShrink1('P');
        setShrink2('P');
        setShrink3('P');
        break;
      case 'hicone':
        setHicone1('P');
        setHicone2('P');
        setHicone3('P');
        break;
      case 'tray':
        setTray1('P');
        setTray2('P');
        setTray3('P');
        break;
      case 'bonded':
        setBonded1('P');
        setBonded2('P');
        setBonded3('P');
        break;
      case 'sealed':
        setSealed1('P');
        setSealed2('P');
        setSealed3('P');
        break;
      case 'legable':
        setLegable1('P');
        setLegable2('P');
        setLegable3('P');
        break;
      case 'burn':
        setBurn1('P');
        setBurn2('P');
        setBurn3('P');
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mt-4">
      <Header />
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter ID"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter Time"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={flavor}
            onChange={(e) => setFlavor(e.target.value)}
            placeholder="Enter Flavor"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={appearance1}
            onChange={(e) => setAppearance1(e.target.value)}
            placeholder="Enter Appearance 1"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={appearance2}
            onChange={(e) => setAppearance2(e.target.value)}
            placeholder="Enter Appearance 2"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={appearance3}
            onChange={(e) => setAppearance3(e.target.value)}
            placeholder="Enter Appearance 3"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <h3>Shrink</h3>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={shrink1 === 'P'}
              onChange={() => handleCheckboxClick('shrink')}
            />
            <label className="form-check-label">Shrink 1</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={shrink2 === 'P'}
              onChange={() => handleCheckboxClick('shrink')}
            />
            <label className="form-check-label">Shrink 2</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={shrink3 === 'P'}
              onChange={() => handleCheckboxClick('shrink')}
            />
            <label className="form-check-label">Shrink 3</label>
          </div>
        </div>
        <div className="row mb-3">
        <div className="col">
          <h3>Hicone</h3>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={hicone1 === 'P'}
              onChange={() => handleCheckboxClick('hicone')}
            />
            <label className="form-check-label">Hicone 1</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={hicone2 === 'P'}
              onChange={() => handleCheckboxClick('hicone')}
            />
            <label className="form-check-label">Hicone 2</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={hicone3 === 'P'}
              onChange={() => handleCheckboxClick('hicone')}
            />
            <label className="form-check-label">Hicone 3</label>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <h3>Tray</h3>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={tray1 === 'P'}
              onChange={() => handleCheckboxClick('tray')}
            />
            <label className="form-check-label">Tray 1</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={tray2 === 'P'}
              onChange={() => handleCheckboxClick('tray')}
            />
            <label className="form-check-label">Tray 2</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={tray3 === 'P'}
              onChange={() => handleCheckboxClick('tray')}
            />
            <label className="form-check-label">Tray 3</label>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <h3>Bonded</h3>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={bonded1 === 'P'}
              onChange={() => handleCheckboxClick('bonded')}
            />
            <label className="form-check-label">Bonded 1</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={bonded2 === 'P'}
              onChange={() => handleCheckboxClick('bonded')}
            />
            <label className="form-check-label">Bonded 2</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={bonded3 === 'P'}
              onChange={() => handleCheckboxClick('bonded')}
            />
            <label className="form-check-label">Bonded 3</label>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <h3>Sealed</h3>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={sealed1 === 'P'}
              onChange={() => handleCheckboxClick('sealed')}
            />
            <label className="form-check-label">Sealed 1</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={sealed2 === 'P'}
              onChange={() => handleCheckboxClick('sealed')}
            />
            <label className="form-check-label">Sealed 2</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={sealed3 === 'P'}
              onChange={() => handleCheckboxClick('sealed')}
            />
            <label className="form-check-label">Sealed 3</label>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <h3>Legable</h3>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={legable1 === 'P'}
              onChange={() => handleCheckboxClick('legable')}
            />
            <label className="form-check-label">Legable 1</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={legable2 === 'P'}
              onChange={() => handleCheckboxClick('legable')}
            />
            <label className="form-check-label">Legable 2</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={legable3 === 'P'}
              onChange={() => handleCheckboxClick('legable')}
            />
            <label className="form-check-label">Legable 3</label>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <h3>Burn</h3>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={burn1 === 'P'}
              onChange={() => handleCheckboxClick('burn')}
            />
            <label className="form-check-label">Burn 1</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={burn2 === 'P'}
              onChange={() => handleCheckboxClick('burn')}
            />
            <label className="form-check-label">Burn 2</label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={burn3 === 'P'}
              onChange={() => handleCheckboxClick('burn')}
            />
            <label className="form-check-label">Burn 3</label>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={btl}
            onChange={(e) => setBtl(e.target.value)}
            placeholder="Enter Btl"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={proDateCode}
            onChange={(e) => setProDateCode(e.target.value)}
            placeholder="Enter Pro Date Code"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={checks}
              onChange={(e) => setChecks(e.target.checked)}
            />
            <label className="form-check-label">Checks</label>
          </div>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={lid}
              onChange={(e) => setLid(e.target.checked)}
            />
            <label className="form-check-label">Lid</label>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={firstLast}
            onChange={(e) => setFirstLast(e.target.value)}
            placeholder="Enter FirstLast"
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={initials}
            onChange={(e) => setInitials(e.target.value)}
            placeholder="Enter Initials"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Enter Comments"
          />
        </div>
      </div>
      </div>
      </div>

  );
};

export default Shrink;