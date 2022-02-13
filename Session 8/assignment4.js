// Assignment 4
// Given an array of numbers print the product of all numbers
// Sample Input - [2,3,4]
// Sample Output - 24

array = [2, 4, 6, 8, 10];

let product = array.reduce(function (prod, e) {
  return prod * e;
});

console.log(product);