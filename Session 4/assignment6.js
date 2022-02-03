// Assignment 6
// Given an empty array fill that array with first 10 natural numbers
// Sample Input: []
// Sample Output: [1,2,3,4,5,6,7,8,9,10]

let array = [];
let limit = 10;

for (let i = 1; i <= limit; i++) {
  array.push(i);
}

console.log(array);