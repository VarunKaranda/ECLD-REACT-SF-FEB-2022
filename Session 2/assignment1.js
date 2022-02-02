// Assignment 1
// If the given year is a leap year print "LEAP YEAR" and if it's not a leap year print "NOT LEAP YEAR"

let year = 1300;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("LEAP YEAR");
    } else {
      console.log("NOT LEAP YEAR");
    }
  } else {
    console.log("LEAP YEAR");
  }
} else {
  console.log("NOT LEAP YEAR");
}
