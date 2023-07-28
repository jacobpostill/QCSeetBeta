import React, { useState, useEffect } from 'react';
import Header from './Header';
import Filtec from './Filtec'
import axios from 'axios';

function Rinser() {
  const [entries, setEntries] = useState([]);
  const [time, setTime] = useState('');
  const [shift, setShift] = useState('');
  const [productCode, setProductCode] = useState('');
  const [flavor, setFlavor] = useState('');
  const [rinserOperational, setRinserOperational] = useState(''); // Will be 'pass' or 'fail'
  const [initials, setInitials] = useState('');
  const [computerOn, setComputerOn] = useState('yes'); // Will be 'yes' or 'no'
  const [readings, setReadings] = useState('');

  useEffect(() => {
    const reportId = window.location.pathname.split('/').pop();
    axios
      .get(`http://localhost:3001/canline/rinsercan/${reportId}`)
      .then((response) => {
        const data = response.data;
        if (data && data.length > 0) {
          setEntries(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching previous entries:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reportId = window.location.pathname.split('/').pop();
    const reportData = {
      time,
      reportId,
      shift,
      productCode,
      flavor,
      rinserOperational,
      initials,
      computerOn,
      readings,
    };

    axios
      .post(`http://localhost:3001/canline/rinsercan/${reportId}`, reportData)
      .then((response) => {
        console.log(response.data); // Success message from the server
        // Add any additional logic you want to handle successful form submission
        setTime('');
        setShift('');
        setProductCode('');
        setFlavor('');
        setRinserOperational('');
        setInitials('');
        setComputerOn('yes');
        setReadings('');
        axios
          .get(`http://localhost:3001/canline/rinsercan/${reportId}`)
          .then((response) => {
            const data = response.data;
            if (data && data.length > 0) {
              setEntries(data);
            }
          });
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        // Handle any errors here (e.g., show error message to the user)
      });
  };

  const handleRinserOperationalChange = (value) => {
    setRinserOperational(value);
  };

  return (
    <div className="container mt-5">
    <Header />

    <h2>Rinser Form</h2>
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <div id="timeList">
              {entries.map((entry, index) => (
                <div key={index} id={`timeList${index}`}>
                  {entry.time}
                </div>
              ))}
            </div>
            <input
              type="text"
              id="time"
              name="time"
              className="form-control"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="shift">Shift</label>
            <div id="shiftList">
              {entries.map((entry, index) => (
                <div key={index} id={`shiftList${index}`}>
                  {entry.shift}
                </div>
              ))}
              <input
                type="text"
                className="form-control"
                name="shift"
                id="shift"
                value={shift}
                onChange={(e) => setShift(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="productCode">Product Code</label>
            <div id="productList">
              {entries.map((entry, index) => (
                <div key={index} id={`productList${index}`}>
                  {entry.productCode}
                </div>
              ))}
              <input
                type="text"
                className="form-control"
                id="productCode"
                name="productCode"
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="flavor">Flavor</label>
            <div id="flavorList">
              {entries.map((entry, index) => (
                <div key={index} id={`flavorList${index}`}>
                  {entry.flavor}
                </div>
              ))}
              <input
                type="text"
                className="form-control"
                id="flavor"
                name="flavor"
                value={flavor}
                onChange={(e) => setFlavor(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="rinserOperational">Rinser Operational</label>
            <div id="rinserList">
              {entries.map((entry, index) => (
                <div key={index} id={`rinserList${index}`}>
                  {entry.operatiional}
                </div>
              ))}
              <div>
                <button
                  type="button"
                  onClick={() => handleRinserOperationalChange('pass')}
                  className={`btn ${rinserOperational === 'pass' ? 'btn-success' : 'btn-secondary'}`}
                >
                  Pass
                </button>
                <button
                  type="button"
                  onClick={() => handleRinserOperationalChange('fail')}
                  className={`btn ${rinserOperational === 'fail' ? 'btn-danger' : 'btn-secondary'}`}
                >
                  Fail
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="initials">Initials</label>
            <div id="initialsList">
              {entries.map((entry, index) => (
                <div key={index} id={`initialsList${index}`}>
                  {entry.initals}
                </div>
              ))}
              <input
                type="text"
                className="form-control"
                id="initials"
                name="initials"
                value={initials}
                onChange={(e) => setInitials(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="computerOn">Computer On</label>
            <div id="computerList">
              {entries.map((entry, index) => (
                <div key={index} id={`computerList${index}`}>
                  {entry.computer}
                </div>
              ))}
              <div>
                <label>
                  <input
                    type="radio"
                    name="computer"
                    value="yes"
                    checked={computerOn === 'yes'}
                    onChange={() => setComputerOn('yes')}
                  />{' '}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="computer"
                    value="no"
                    checked={computerOn === 'no'}
                    onChange={() => setComputerOn('no')}
                  />{' '}
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <Filtec />

    </div>

  );
}

export default Rinser;
