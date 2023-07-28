import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import the Link component for routing

function Header() {
  const path = window.location.pathname;
  const parts = path.split('/');
  const reportId = parts[parts.length - 1];

  useEffect(() => {
    axios.get(`http://localhost:3001/canLine/${reportId}`)
      .then((response) => {
        // Get the data from the response
        const { Line, Date, Shift } = response.data;

        // Populate the boxes with the data
        document.getElementById('lineBox').textContent = `Line: ${Line}`;
        document.getElementById('dateBox').textContent = `Day: ${Date}`;
        document.getElementById('shiftBox').textContent = `Shift: ${Shift}`;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [reportId]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
        <Link to="/">
            <button type="button" className="btn btn-primary">Home</button>
          </Link>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div id="lineBox" className="border p-2"></div>
        </div>
        <div className="col">
          <div id="dateBox" className="border p-2"></div>
        </div>
        <div className="col">
          <div id="shiftBox" className="border p-2"></div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
            <Link to={`/canline/rinser/${reportId}`}>
                <div className="border p-2">Rinser</div>
            </Link>
        </div>
        <div className="col">
          <Link to={`/canline/depal/${reportId}`}>
            <div className="border p-2">Depal</div>
          </Link>
        </div>
        <div className="col">
          {/* Use Link component for "Primary" text */}
          <Link to={`/canline/primary/${reportId}`}>
            <div className="border p-2">Primary</div>
          </Link>
        </div>
        <div className="col">
          <Link to={`/canline/calibration/${reportId}`}>
            <div className="border p-2">Calibration</div>
          </Link>
        </div>
         <div className="col">
          {/* Add the Shrink component */}
          <Link to={`/canline/shrink/${reportId}`}>
            <div className="border p-2">Shrink</div>
          </Link>
        </div>
        <div className="col">
          {/* Add the Seam component */}
          <Link to={`/canline/seam/${reportId}`}>
            <div className="border p-2">Seam</div>
          </Link>
        </div>
        <div className="col">
          {/* Add the Paperboard component */}
          <Link to={`/canline/paperboard/${reportId}`}>
            <div className="border p-2">Paperboard</div>
          </Link>
        </div>
        <div className="col">
          {/* Add the Runsheet component */}
          <Link to={`/canline/runsheet/${reportId}`}>
            <div className="border p-2">Runsheet</div>
          </Link>
        </div>
        <div className="col">
          {/* Add the BallCage component */}
          <Link to={`/canline/ballcage/${reportId}`}>
            <div className="border p-2">BallCage</div>
          </Link>
        </div>
      </div>
       
      </div>
  );
}

export default Header;
