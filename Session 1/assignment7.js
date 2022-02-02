//ASSIGNMENT 7
// Given the Principal Amount, Interest Percentage and Time calculate the simple interest amount

let principalAmount = 20000;
let percentageOfInterest = 10;
let timePeriod = 3.5;
let interest = (principalAmount * timePeriod * percentageOfInterest) / 100;

console.log(
  `Interest for ${principalAmount} for a rate of ${percentageOfInterest}% for a period of ${timePeriod} years is ${interest}`
);
