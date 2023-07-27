import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header'

function Depal () {

        const path = window.location.pathname;
        const parts = path.split('/');
        const reportId = parts[parts.length - 1];

  const [time, setTime] = useState('');
  const [product, setProduct] = useState('');
  const [lot, setLot] = useState('');
  const [initials, setInitials] = useState('');
  const [depalCanData, setDepalCanData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Do something with the input values, e.g., send them to the server or perform some actions.
    // You can access the variables `time`, `product`, `lot`, and `initials` here and use them as needed.
    console.log('Time:', time);
    console.log('Product:', product);
    console.log('Lot:', lot);
    console.log('Initials:', initials);
    console.log('reportId:', reportId);
  
    axios.post('http://localhost:3001/createCanLine/createdepal', {
      reportId,
      initials,
      time,
      product,
      lot,
    })
      .then((response) => {
        console.log('Received reportId:', response);
        // Update the depalCanData state with the new entry
        setDepalCanData([...depalCanData, response.data]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  async function fetchDepalCanData(reportId) {
    try {
      const response = await axios.get(`http://localhost:3001/createCanLine/createdepal/${reportId}`);
      console.log('Response:', response.data);
      return response.data; // Use response.data directly
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  useEffect(() => {
    async function fetchData() {
      const depalCanData = await fetchDepalCanData(reportId);
      setDepalCanData(depalCanData);
    }

    fetchData();
  }, [reportId]);


  return (
    <div className="container mt-5">
        {<Header/>}
        <div>
    <h2>Depal Can List</h2>
    <div>
      <h3>Time</h3>
      {depalCanData.map((depalCan, index) => (
        <div key={index}>
          <p>{depalCan.time}</p>
        </div>
      ))}
    </div>
    <div>
      <h3>Product</h3>
      {depalCanData.map((depalCan, index) => (
        <div key={index}>
          <p>{depalCan.product}</p>
        </div>
      ))}
    </div>
    <div>
      <h3>Lot</h3>
      {depalCanData.map((depalCan, index) => (
        <div key={index}>
          <p>{depalCan.lot}</p>
        </div>
      ))}
    </div>
    <div>
      <h3>Initials</h3>
      {depalCanData.map((depalCan, index) => (
        <div key={index}>
          <p>{depalCan.initials}</p>
        </div>
      ))}
    </div>
  </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="timeInput">Time:</label>
            <input
              type="text"
              className="form-control"
              id="timeInput"
              placeholder="Enter Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="form-group col">
            <label htmlFor="productInput">Product:</label>
            <input
              type="text"
              className="form-control"
              id="productInput"
              placeholder="Enter Product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
          </div>
          <div className="form-group col">
            <label htmlFor="lotInput">Lot:</label>
            <input
              type="text"
              className="form-control"
              id="lotInput"
              placeholder="Enter Lot"
              value={lot}
              onChange={(e) => setLot(e.target.value)}
            />
          </div>
          <div className="form-group col">
            <label htmlFor="initialsInput">Initials:</label>
            <input
              type="text"
              className="form-control"
              id="initialsInput"
              placeholder="Enter Initials"
              value={initials}
              onChange={(e) => setInitials(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Depal;
