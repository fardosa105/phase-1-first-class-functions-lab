// indexTest.js

const assert = require('chai').assert; // Example using Chai assertion library
const {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  selectingDrivers,
  createFareMultiplier,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers
} = require('../index'); // Adjust the path as needed

// Example test cases
describe('First Class Functions Lab', function() {
  const drivers = ['Driver 1', 'Driver 2', 'Driver 3', 'Driver 4'];

  it('returnFirstTwoDrivers should return first two drivers', function() {
    assert.deepEqual(returnFirstTwoDrivers(drivers), ['Driver 1', 'Driver 2']);
  });

  it('returnLastTwoDrivers should return last two drivers', function() {
    assert.deepEqual(returnLastTwoDrivers(drivers), ['Driver 3', 'Driver 4']);
  });

  it('selectingDrivers should include returnFirstTwoDrivers and returnLastTwoDrivers', function() {
    const selectedDrivers = selectingDrivers(drivers);
    assert.include(selectedDrivers, returnFirstTwoDrivers);
    assert.include(selectedDrivers, returnLastTwoDrivers);
  });

  // Add more tests for other functions like createFareMultiplier, fareDoubler, etc.
});

