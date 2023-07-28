import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header'

function Depal () {
  const [entries, setEntries] = useState([]);
  const [time, setTime] = useState('');
  const [product, setProduct] = useState('');
  const [lot, setLot] = useState('');
  const [initials, setInitials] = useState('');

  useEffect(() => {
    const reportId = window.location.pathname.split('/').pop();
    axios
      .get(`http://localhost:3001/canline/createdepal/${reportId}`)
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
      lot,
      product,
      initials,
    };

  
    axios.post(`http://localhost:3001/createCanLine/createdepal/${reportId}`, reportData)
      .then((response) => {
        console.log('Report created:', response.data);        // Update the depalCanData state with the new entry
        setProduct('');
        setTime('');
        setLot('');
        setInitials('');
        axios.get(`http://localhost:3001/canline/createdepal/${reportId}`).then((response) => {
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

  return (
    <div className="container mt-5">
    <Header />
    <h1>Depal Package Lot Tracking Log</h1>
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
          <p>Product:</p>
          {entries.map((entry, index) => (
            <div key={index} id={`productList${index}`}>
              {entry.product}
            </div>
          ))}
          <input
            type="text"
            id="product"
            name="product"
            className="form-control"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
        </div>

        <div style={{ flex: '1' }}>
          <p>Lot:</p>
          {entries.map((entry, index) => (
            <div key={index} id={`lotList${index}`}>
              {entry.lot}
            </div>
          ))}
          <input
            type="text"
            id="lot"
            name="lot"
            className="form-control"
            value={lot}
            onChange={(e) => setLot(e.target.value)}
          />
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
}

export default Depal;
