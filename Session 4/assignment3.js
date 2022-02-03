// Assignment 3
// Given an array of marks, find out the Average
// Sample Input: [95, 86, 66, 94, 58]
// Sample Output: 79.8
// Hint: use arr.length

let array = [10, 20, 30, 40, 50];
let sum = 0;

for (i = 0; i < array.length; i++) {
  sum += array[i];
}

let average = sum / array.length;

console.log(average);
