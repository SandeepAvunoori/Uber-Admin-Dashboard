const faker = require('faker');
const turf = require('@turf/turf');
const fs = require('fs');

const CITY_LAT_LNG_BOUNDS = [[MIN_LATITUDE, MIN_LONGITUDE], [MAX_LATITUDE, MAX_LONGITUDE]];
const NUM_DRIVERS = 100;
const MIN_TRIPS_PER_DRIVER = 500;
const MAX_TRIPS_PER_DRIVER = 1000;

const drivers = [];

for (let i = 1; i <= NUM_DRIVERS; i++) {
  const driver = {
    name: faker.name.findName(),
    dateOfBirth: faker.date.past(30),
    profilePhoto: `https://picsum.photos/id/${i}/512/512`,
    trips: [],
  };

  const numTrips = faker.datatype.number({ min: MIN_TRIPS_PER_DRIVER, max: MAX_TRIPS_PER_DRIVER });

  for (let j = 1; j <= numTrips; j++) {
    const startLocation = turf.randomPoint(CITY_LAT_LNG_BOUNDS).geometry.coordinates;
    const endLocation = turf.randomPoint(CITY_LAT_LNG_BOUNDS).geometry.coordinates;
    const tripDistanceMeters = turf.distance(startLocation, endLocation) * 1000;
    const startTime = faker.date.between('2022-01-01', '2022-12-31').getTime();
    const endTime = startTime + faker.datatype.number({ min: 300000, max: 7200000 });
    const fare = Math.round(12 * tripDistanceMeters / 1000);

    driver.trips.push({
      tripId: faker.datatype.uuid(),
      startLocation: {
        latitude: startLocation[1],
        longitude: startLocation[0],
      },
      endLocation: {
        latitude: endLocation[1],
        longitude: endLocation[0],
      },
      startTime,
      endTime,
      fare,
      tripDistanceMeters,
    });
  }

  drivers.push(driver);
}

fs.writeFileSync('drivers.json', JSON.stringify(drivers));
