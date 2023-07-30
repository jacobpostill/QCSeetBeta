import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header'

function runSheetView () {
  const [entries, setEntries] = useState([]);
  const [time, setTime] = useState('');
  const [filtecVer, setVerification] = useState('');
  const [initials, setInitials] = useState('');

  useEffect(() => {
    const reportId = window.location.pathname.split('/').pop();
    axios
      .get(`http://localhost:3001/canline/runSheet/${reportId}`)
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


  return (
    <div className="container mt-5">
      <h1>Run Sheet Submission</h1>
      <form  id="depalCanForm">
        <div className="data-container" style={{ display: 'flex' }}>
          {/* Time */}
          <div style={{ flex: '1' }}>
            <p>Was Run Sheet Complete:</p>
            {entries.map((entry, index) => (
              <div key={index} id={`yesList${index}`}>
                {entry.check}
              </div>
            ))}
          </div>

          <div style={{ flex: '1' }}>
            <p>Comment:</p>
            {entries.map((entry, index) => (
              <div key={index} id={`commentList${index}`}>
                {entry.comment}
              </div>
            ))}
            {/* Replace the input with Yes and No buttons */}
            <div>
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
          </div>
        </div>

      </form>

      <div id="depalCanData"></div>
    </div>
  );
}

export default runSheetView;