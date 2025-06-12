const returnFirstTwoDrivers = (drivers) => {
 
  return drivers.slice(0, 2);
};


const returnLastTwoDrivers = (drivers) => {
 
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = (multiplier) => {

  return (fare) => {
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);


const selectDifferentDrivers = (drivers, selectionFunction) => {

  return selectionFunction(drivers);
};




console.log("--- Driver Selection Tests ---");
const scuberDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo', 'Lena', 'Carlos'];

console.log("returnFirstTwoDrivers:", returnFirstTwoDrivers(scuberDrivers)); 
console.log("returnLastTwoDrivers:", returnLastTwoDrivers(scuberDrivers));   

console.log("\nselectingDrivers array:");
console.log("selectingDrivers[0] (returnFirstTwoDrivers result):", selectingDrivers[0](scuberDrivers)); 
console.log("selectingDrivers[1] (returnLastTwoDrivers result):", selectingDrivers[1](scuberDrivers));   

console.log("\nselectDifferentDrivers Tests:");
console.log("Select first two using selectDifferentDrivers:", selectDifferentDrivers(scuberDrivers, returnFirstTwoDrivers)); // Expected: ['Antonia', 'Nuru']
console.log("Select last two using selectDifferentDrivers:", selectDifferentDrivers(scuberDrivers, returnLastTwoDrivers));   // Expected: ['Lena', 'Carlos']

console.log("\n--- Fare Multiplier Tests ---");
const baseFare = 15;

console.log(`Base Fare: $${baseFare}`);
console.log("fareDoubler:", fareDoubler(baseFare));   
console.log("fareTripler:", fareTripler(baseFare));  

const customMultiplier = createFareMultiplier(5);
console.log("Custom Multiplier (x5):", customMultiplier(baseFare)); 

