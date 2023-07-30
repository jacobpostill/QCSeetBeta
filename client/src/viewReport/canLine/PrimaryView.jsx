import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';

function PrimaryView() {
  const [entries, setEntries] = useState([]);
  const [pallet, setPallet] = useState('');
  const [time, setTime] = useState('');
  const [flavor, setFlavor] = useState('');
  const [color, setColor] = useState('');
  const [label, setLabel] = useState('');
  const [lot, setLot] = useState('');

  useEffect(() => {
    const reportId = window.location.pathname.split('/').pop();
    axios
      .get(`http://localhost:3001/canline/primarylotcans/${reportId}`)
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
    const reportId = window.location.pathname.split('/').pop(); // Get the reportId from the URL
    const reportData = {
      reportId,
      time,
      flavor,
      lot,
      pallet,
      label,
      color,
    };

    axios
      .post(`http://localhost:3001/canline/primarylot/${reportId}`, reportData)
      .then((response) => {
        console.log('Report created:', response.data);
        // Clear form fields after successful submission (optional)
        setPallet('');
        setTime('');
        setFlavor('');
        setColor('');
        setLabel('');
        setLot('');
        // Refresh the entries after submission
        axios.get(`http://localhost:3001/canline/primarylotcans/${reportId}`).then((response) => {
          const data = response.data;
          if (data && data.length > 0) {
            setEntries(data);
          }
        });
      })
      .catch((error) => {
        console.error('Error creating report:', error);
      });
  };

  return (
    <div className="container mt-5">
      <Header />
      <h1>Primary Package Lot Tracking Log</h1>
      <form onSubmit={handleSubmit} id="depalCanForm">
        <div className="data-container" style={{ display: 'flex' }}>
          {/* Pallet/Box # */}
          <div style={{ flex: '1' }}>
            <p>Pallet/Box #:</p>
            {entries.map((entry, index) => (
              <div key={index} id={`palletList${index}`}>
                {entry.pallet}
              </div>
            ))}
          </div>

          {/* Time */}
          <div style={{ flex: '1' }}>
            <p>Time:</p>
            {entries.map((entry, index) => (
              <div key={index} id={`timeList${index}`}>
                {entry.time}
              </div>
            ))}
          </div>

          {/* Flavour */}
          <div style={{ flex: '1' }}>
            <p>Flavour:</p>
            {entries.map((entry, index) => (
              <div key={index} id={`flavorList${index}`}>
                {entry.flavor}
              </div>
            ))}
          </div>

          {/* Color */}
          <div style={{ flex: '1' }}>
            <p>Color:</p>
            {entries.map((entry, index) => (
              <div key={index} id={`colorList${index}`}>
                {entry.color}
              </div>
            ))}
          </div>

          {/* Label Matches Product Content */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p>Label Matches Product Content:</p>
          {entries.map((entry, index) => (
            <div key={index} id={`labelList${index}`}>
              {entry.label ? 'P' : ''}
            </div>
          ))}
        </div>

          {/* Lot */}
          <div style={{ flex: '1' }}>
            <p>Lot:</p>
            {entries.map((entry, index) => (
              <div key={index} id={`lotList${index}`}>
                {entry.lot}
              </div>
            ))}

          </div>
        </div>

      </form>

      <div id="depalCanData"></div>
    </div>
  );
}

export default PrimaryView;
