// Assignment 2
// Given an array of numbers generate an array containing the double value of the numbers
// Sample Input [1, 2]
// Sample Output [2, 4]

array = [2, 4, 6, 8, 10];

let newArray = array.map(function (e) {
  return e * 2;
});

console.log(newArray);