// Assignment 2
// In India, a person can vote if he crosses 18years of age. Give a person year of birth print "YES" if he can vote otherwise print "NO"

let yearOfBirth = 1993;
let currentYear = 2022
let age = currentYear - yearOfBirth;

if (age >= 18) {
  console.log("YES");
} else {
  console.log("NO");
}