/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocity = 10000; // Initial velocity in km/h
const acceleration = 3; // Acceleration in m/s^2
const duration = 3600; // Duration in seconds (1 hour)
const initialDistance = 0; // Initial distance in km
const initialFuel = 5000; // Initial fuel amount in kg
const fuelBurnRate = 0.5; // Fuel burn rate in kg/s

const newDistance = initialDistance + initialVelocity * (duration / 3600); //calcultes new distance
const const remainingFuel = fuelBurnRate * (duration / 3600); //calculates remaining fuel
const newVelocity = calcNewVel(acceleration, initialVelocity, duration); //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (initialVelocity, acceleration, duration) => {
  return initialVelocity + (acceleration * (duration / 3600));
}

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
