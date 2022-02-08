// Assignment 9
// Given an array of numbers print the product of all numbers
// Sample Input - [2,3,4]
// Sample Output - 24

let array = [1, 12, 123];
let product = 1;

for (let i = 0; i < array.length; i++) {
  product *= array[i];
}

console.log(product);