// Assignment 1
// Given an array of numbers print the square of those numbers
// Sample Input:  [2, 3, 5, 7, 9]
// Sample Output: 4 9 25 49 81
// Bonus: use square() function and forEach HOF

let array = [2, 4, 6, 8, 10]
let newArray = [];

array.forEach(function (num) {
  newArray.push(num * num);
});

console.log(newArray.join(" "));