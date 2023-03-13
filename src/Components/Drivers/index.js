import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DriverProfileCard from './DriverProfileCard';

function Drivers() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    axios.get('/api/drivers')
      .then(response => setDrivers(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleDeleteDriver = (id) => {
    axios.delete(`/api/drivers/${id}`)
      .then(response => setDrivers(drivers.filter(driver => driver.id !== id)))
      .catch(error => console.log(error));
  };

  const handleEditDriver = (id) => {
    // TODO: implement editing of driver profile
  };

  return (
    <div>
      <h1>Drivers</h1>
      {drivers.map(driver => (
        <DriverProfileCard
          key={driver.id}
          id={driver.id}
          name={driver.name}
          photo={driver.photo}
          age={driver.age}
          rating={driver.rating}
          totalTrips={driver.totalTrips}
          onDelete={handleDeleteDriver}
          onEdit={handleEditDriver}
        />
      ))}
    </div>
  );
}

export default Drivers;
