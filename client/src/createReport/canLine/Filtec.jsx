import { useState, useEffect } from 'react';
import axios from 'axios';

const Filtec = () => {
  const [entries, setEntries] = useState([]);
  const [time, setTime] = useState('');
  const [filtecVer, setVerification] = useState('');
  const [initials, setInitials] = useState('');

  useEffect(() => {
    const reportId = window.location.pathname.split('/').pop();
    axios
      .get(`http://localhost:3001/createCanLine/fitlecCan/${reportId}`)
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
      filtecVer,
      initials,
    };

  
    axios.post(`http://localhost:3001/createCanLine/fitlecCan/${reportId}`, reportData)
      .then((response) => {
        console.log('Report created:', response.data);        // Update the depalCanData state with the new entry
        setTime('');
        setVerification('');
        setInitials('');
        axios.get(`http://localhost:3001/createCanLine/fitlecCan/${reportId}`).then((response) => {
          const data = response.data;
          if (data && data.length > 0) {
            setEntries(data);
          }
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleButtonClick = (value) => {
    setVerification(value);
  };
  
  return (
    <div className="container mt-5">
      <h1>Filtec Inspection</h1>
      <form onSubmit={handleSubmit} id="depalCanForm">
        <div className="data-container" style={{ display: 'flex' }}>
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

          <div style={{ flex: '1' }}>
            <p>Filtec #1 Verification Setup:</p>
            {entries.map((entry, index) => (
              <div key={index} id={`filtecVerList${index}`}>
                {entry.filtecVer}
              </div>
            ))}
            {/* Replace the input with Yes and No buttons */}
            <div>
            <button
          type="button"
          className={`btn btn-${filtecVer === 'Yes' ? 'success' : 'secondary'}`}
          onClick={() => handleButtonClick('Yes')}
        >
          Yes
        </button>
        <button
          type="button"
          className={`btn btn-${filtecVer === 'No' ? 'success' : 'secondary'}`}
          onClick={() => handleButtonClick('No')}
        >
          No
        </button>
            </div>
          </div>

          {/* Lot */}
          <div style={{ flex: '1' }}>
            <p>Initials:</p>
            {entries.map((entry, index) => (
              <div key={index} id={`initialsList${index}`}>
                {entry.initials}
              </div>
            ))}
            <input
              type="text"
              id="initials"
              name="initials"
              className="form-control"
              value={initials}
              onChange={(e) => setInitials(e.target.value)}
            />
          </div>
        </div>

        <input type="submit" value="Submit" id="submit" className="btn btn-primary" />
      </form>

      <div id="depalCanData"></div>
    </div>
  );
};

export default Filtec;