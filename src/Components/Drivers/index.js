import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './index.css'

function Drivers() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setDrivers(data));
  }, []);

  return (
    <Container>
      <h1 className='driver-list-name'>Uber Drivers</h1>
      <Row>
        {drivers.map((driver) => (
          <Col key={driver.id} md={4} className="mb-4 card-names" >
            <Card>
              <Card.Img variant="top" className='driver-photo' src={`https://robohash.org/${driver.username}`} />
              <Card.Body>
                <Card.Title className='driver-name'>{driver.name}</Card.Title>
                <Card.Text className='driver-email'>{driver.email}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Drivers;
