// index.js

// Function to return the first two drivers from the passed-in array
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

// Function to return the last two drivers from the passed-in array
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// Function that returns an array with specific driver functions
function selectingDrivers(driversArray) {
  return [returnFirstTwoDrivers, returnLastTwoDrivers];
}

// Function that creates a multiplier function
function createFareMultiplier(multiplier) {
  return function(value) {
    return value * multiplier;
  };
}

// Function that doubles fares
function fareDoubler(fare) {
  return fare * 2;
}

// Function that triples fares
function fareTripler(fare) {
  return fare * 3;
}

// Function that selects different drivers based on the provided function
function selectDifferentDrivers(drivers, driverFunction) {
  return driverFunction(drivers);
}

// Exporting functions
module.exports = {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  selectingDrivers,
  createFareMultiplier,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers
};
