import { useState } from 'react';
import Header from './Header';
import axios from 'axios';

function Primary() {
  const [pallet, setPallet] = useState('');
  const [time, setTime] = useState('');
  const [flavor, setFlavor] = useState('');
  const [color, setColor] = useState('');
  const [label, setLabel] = useState('');
  const [lot, setLot] = useState('');

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

    axios.post(`http://localhost:3001/canline/primarylot/${reportId}`, reportData)
      .then((response) => {
        console.log('Report created:', response.data);
        // Clear form fields after successful submission (optional)
        setPallet('');
        setTime('');
        setFlavor('');
        setColor('');
        setLabel('');
        setLot('');
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
        <div className="data-container">
          <div className="form-group">
            <label htmlFor="pallet">Pallet/Box #:</label>
            <div id="palletList"></div>
            <input
              type="text"
              id="pallet"
              name="pallet"
              className="form-control"
              value={pallet}
              onChange={(e) => setPallet(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <div id="timeList"></div>
            <input
              type="text"
              id="time"
              name="time"
              className="form-control"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="flavor">Flavour:</label>
            <div id="flavorList"></div>
            <input
              type="text"
              id="flavor"
              name="flavor"
              className="form-control"
              value={flavor}
              onChange={(e) => setFlavor(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="color">Color:</label>
            <div id="colorList"></div>
            <input
              type="text"
              id="color"
              name="color"
              className="form-control"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="label">Label Matches Product Content:</label>
            <div id="labelList"></div>
            <input
              type="text"
              id="label"
              name="label"
              className="form-control"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lot">Lot:</label>
            <div id="lotList"></div>
            <input
              type="text"
              id="lot"
              name="lot"
              className="form-control"
              value={lot}
              onChange={(e) => setLot(e.target.value)}
            />
          </div>
        </div>

        <input type="submit" value="Submit" id="submit" className="btn btn-primary" />
      </form>

      <div id="depalCanData"></div>
    </div>
  );
}

export default Primary;
