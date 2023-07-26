import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Home</h1>
      <div className="row">
        <div className="col-md-6">
          <Link to="/selectLine" className="btn btn-primary mr-3">Create a Report</Link>
        </div>
        <div className="col-md-6">
          <Link to="/report" className="btn btn-secondary">Go to Report</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
