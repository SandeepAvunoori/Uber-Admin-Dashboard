import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TripCreation(props) {
  const [driver, setDriver] = useState("");
  const [date, setDate] = useState(new Date());
  const [numTrips, setNumTrips] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Generate dummy trips
    const trips = [];
    for (let i = 0; i < numTrips; i++) {
      trips.push({
        driver: driver,
        date: date,
        fare: Math.floor(Math.random() * 100) + 1,
        distance: Math.floor(Math.random() * 10) + 1,
        rating: Math.floor(Math.random() * 5) + 1
      });
    }

    // Add the trips to the database
    fetch('https://api.example.com/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trips)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Display success message to the user
    })
    .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit} className="form-control">
      <label htmlFor="driver-select">Select Driver:</label>
      <select
        id="driver-select"
        name="driver"
        value={driver}
        onChange={(event) => setDriver(event.target.value)}
      >
        {/* Populate this dropdown with options for all drivers in the database */}
      </select>

      <label htmlFor="date-select">Select Date:</label>
      <DatePicker
        id="date-select"
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="MM/dd/yyyy"
      />

      <label htmlFor="num-trips">Select Number of Trips to Generate:</label>
      <input
        id="num-trips"
        type="number"
        name="num_trips"
        min="1"
        max="10"
        value={numTrips}
        onChange={(event) => setNumTrips(event.target.value)}
      />

      <button type="submit" id="generate-btn">
        Generate Trip(s)
      </button>
    </form>
  );
}

export default TripCreation;
