import React, { useState } from 'react';
import axios from 'axios';
import shortid from 'shortid';
import { useNavigate } from "react-router-dom";

function SelectLine() {
  const [line, setLine] = useState('');
  const [date, setDate] = useState('');
  const [shift, setShift] = useState('');

  let route;
  let linkto

  if (line === '1' || line === '2') {
    route = 'http://localhost:3001/createCanLine';
    linkto = `/canLine/Depal/`;
  } else if (line === '3' || line === '5') {
    route = '/createBottleReport';
  } else if (line === '4') {
    route = '/createGatoradeReport';
  } else if (line === '6') {
    route = '/createBIBReport';
  } else if (line === '7') {
    route = '/createVarReport';
  }
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const reportId = shortid.generate();
    console.log(reportId);
    console.log(line);
    console.log(date);
    console.log(shift);
    console.log(route);

    const runPostRequest = (reportId) => {
      axios
        .post(route, { reportId, line, date, shift })
        .then((response) => {
          console.log(response);
          navigate(`${linkto}${reportId}`);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
    
    axios
    .get(`http://localhost:3001/viewCan/findCan/${line}/${shift}/${date}`)
    .then((response) => {
      const CanLine = response.data; // The CanLine data returned from the server
      console.log(CanLine.id)
      if (CanLine.id !== undefined) {
        // CanLine is not null, navigate to the appropriate page
        console.log('CanLine id:', CanLine.id);
        navigate(`/report/depal/${CanLine.id}`);
      } else {
        // CanLine is null, log and run the POST request
        console.log("not there");
        runPostRequest(reportId);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
  
  
  
  return (
    <div className="container mt-5">
      <form onSubmit={handleFormSubmit}>
        <h1>Create Report</h1>
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
  )
}

export default SelectLine;
