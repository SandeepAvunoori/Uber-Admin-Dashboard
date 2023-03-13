import React from 'react';

function DriverProfileCard(props) {
  return (
    <div className="driver-card">
      <img src={props.photo} alt={props.name} />
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Rating: {props.rating}</p>
      <p>Total Trips: {props.totalTrips}</p>
      <button onClick={() => props.onEdit(props.id)}>Edit</button>
      <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  );
}

export default DriverProfileCard;
