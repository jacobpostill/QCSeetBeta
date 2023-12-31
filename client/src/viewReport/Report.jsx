import React, { useState } from 'react';
import axios from 'axios';
import shortid from 'shortid';
import { useNavigate } from "react-router-dom";

function Report() {
  const [line, setLine] = useState('');
  const [date, setDate] = useState('');
  const [shift, setShift] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(line);
    console.log(date);
    console.log(shift);


    axios.get(`http://localhost:3001/viewCan/findCan/${line}/${shift}/${date}` )
    .then((response) => {
      const CanLine = response.data; // The CanLine data returned from the server
      console.log('CanLine id:', CanLine.id);
      navigate(`/report/depal/${CanLine.id}`)
      
        // You can use the reportId to navigate to the appropriate page or display information as needed
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleFormSubmit}>
        <h1>View Report</h1>
        <div className="form-group">
          <label htmlFor="line">Line:</label>
          <input
            type="text"
            className="form-control"
            id="line"
            placeholder="Line"
            value={line}
            onChange={(e) => setLine(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="shift">Shift:</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="day"
              value="Day"
              checked={shift === 'Day'}
              onChange={(e) => setShift(e.target.value)}
            />
            <label className="form-check-label" htmlFor="day">
              Day
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="afternoon"
              value="Afternoon"
              checked={shift === 'Afternoon'}
              onChange={(e) => setShift(e.target.value)}
            />
            <label className="form-check-label" htmlFor="afternoon">
              Afternoon
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="night"
              value="Night"
              checked={shift === 'Night'}
              onChange={(e) => setShift(e.target.value)}
            />
            <label className="form-check-label" htmlFor="night">
              Night
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="weekend"
              value="Weekend"
              checked={shift === 'Weekend'}
              onChange={(e) => setShift(e.target.value)}
            />
            <label className="form-check-label" htmlFor="weekend">
              Weekend
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div id="reportData" className="mt-3"></div> {/* Element to display the fetched data */}
    </div>
  );
}

export default Report;
