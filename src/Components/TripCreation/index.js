import React, { useState } from "react";
import './index.css';

function TripCreation() {
  const [driverId, setDriverId] = useState("");
  const [date, setDate] = useState("");
  const [numTrips, setNumTrips] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        driverId,
        date,
        numTrips,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="form-control">
      <h3 className="trip-creation-heading">Trip Creation</h3>
      <form onSubmit={handleSubmit} className='form-list'>
        <div>
          <label htmlFor="driverId">Driver:</label>
          <select
            id="driverId"
            value={driverId}
            onChange={(e) => setDriverId(e.target.value)}
          >
            <option value="" className="select-driver">-- Select a driver --</option>
            <option value="1">Driver 1</option>
            <option value="2">Driver 2</option>
            <option value="3">Driver 3</option>
            <option value="4">Driver 4</option>
            <option value="5">Driver 5</option>
          </select>
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numTrips">Number of trips:</label>
          <input
            type="number"
            id="numTrips"
            value={numTrips}
            onChange={(e) => setNumTrips(e.target.value)}
          />
        </div>
        <button type="submit">Generate Trips</button>
      </form>
    </div>
  );
}

export default TripCreation;
