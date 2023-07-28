import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';

function BallCage () {
  const [entries, setEntries] = useState([]);
  const [time, setTime] = useState('');
  const [flavor, setFlavour] = useState('');
  const [freq, setFrequencyOfCheck] = useState('');
  const [tightness, setBallCageTightness] = useState('');
  const [inspection, setVisualInspection] = useState('');
  const [initals, setInitials] = useState('');

  useEffect(() => {
    const reportId = window.location.pathname.split('/').pop();
    axios
      .get(`http://localhost:3001/canline/ballcagecan/${reportId}`)
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
      flavor,
      freq,
      tightness,
      inspection,
      initals,
    };

    axios
      .post(`http://localhost:3001/canline/ballcagecan/${reportId}`, reportData)
      .then((response) => {
        console.log(response.data); // Success message from the server
        // Add any additional logic you want to handle successful form submission
        setTime('');
        setFlavour('');
        setFrequencyOfCheck('');
        setBallCageTightness('');
        setVisualInspection('');
        setInitials('');
        axios
          .get(`http://localhost:3001/canline/ballcagecan/${reportId}`)
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
  return (
    <div className="container mt-5">
    <Header />
    <h1>Ball Cage Check</h1>
    <form onSubmit={handleSubmit} id="depalCanForm">
      <div className="data-container" style={{ display: 'flex' }}>
        {/* Pallet/Box # */}
        {/* Time */}
        <div style={{ flex: '1' }}>
          <p>Time:</p>
          {entries.map((entry, index) => (
            <div key={index} id={`timeList${index}`}>
              {entry.time}
            </div>
          ))}
          <input
            type="text"
            id="time"
            name="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        {/* Flavour */}
        <div style={{ flex: '1' }}>
          <p>Flavour:</p>
          {entries.map((entry, index) => (
            <div key={index} id={`flavorList${index}`}>
              {entry.flavor}
            </div>
          ))}
          <input
            type="text"
            id="flavor"
            name="flavor"
            className="form-control"
            value={flavor}
            onChange={(e) => setFlavour(e.target.value)}
          />
        </div>

        <div style={{ flex: '1' }}>
          <p>Fequency of Check:</p>
          {entries.map((entry, index) => (
            <div key={index} id={`freqList${index}`}>
              {entry.freq}
            </div>
          ))}
          <input
            type="text"
            id="freq"
            name="freq"
            className="form-control"
            value={freq}
            onChange={(e) => setFrequencyOfCheck(e.target.value)}
          />
        </div>
      </div>

      <div className="col">
          <div className="form-group">
            <label htmlFor="tightness">Ball Cage Tightness Operational</label>
            <div id="tightnessList">
              {entries.map((entry, index) => (
                <div key={index} id={`rinserList${index}`}>
                  {entry.tightness}
                </div>
              ))}
              <div>
                <button
                  type="button"
                  onClick={() => setBallCageTightness('pass')}
                  className={`btn ${tightness === 'pass' ? 'btn-success' : 'btn-secondary'}`}
                >
                  Pass
                </button>
                <button
                  type="button"
                  onClick={() => setBallCageTightness('fail')}
                  className={`btn ${tightness === 'fail' ? 'btn-danger' : 'btn-secondary'}`}
                >
                  Fail
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="form-group">
            <label htmlFor="inspection">Visual Inspection</label>
            <div id="inspectionList">
              {entries.map((entry, index) => (
                <div key={index} id={`inspectionList${index}`}>
                  {entry.inspection}
                </div>
              ))}
              <div>
                <button
                  type="button"
                  onClick={() => setBallCageTightness('pass')}
                  className={`btn ${inspection === 'pass' ? 'btn-success' : 'btn-secondary'}`}
                >
                  Pass
                </button>
                <button
                  type="button"
                  onClick={() => setVisualInspection('fail')}
                  className={`btn ${inspection === 'fail' ? 'btn-danger' : 'btn-secondary'}`}
                >
                  Fail
                </button>
              </div>
            </div>
          </div>
          <div className="col">
          <div className="form-group">
            <label htmlFor="initals">Initials</label>
            <div id="initalsList">
              {entries.map((entry, index) => (
                <div key={index} id={`initalsList${index}`}>
                  {entry.initals}
                </div>
              ))}
              <input
                type="text"
                className="form-control"
                id="initals"
                name="initals"
                value={initals}
                onChange={(e) => setInitials(e.target.value)}
              />
            </div>
          </div>
        </div>
        </div>
      <input type="submit" value="Submit" id="submit" className="btn btn-primary" />
    </form>

    <div id="depalCanData"></div>
  </div>
);
          }

export default BallCage;
