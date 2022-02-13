// Assignment 3
// Given an array of numbers extract the numbers divisible by 3
// Sample Input - [1,2,3]
// Sample Output - [3]

array = [2, 4, 6, 8, 10, 12];

let newArray = array.filter(function (e) {
  return e % 3 === 0;
});

console.log(newArray);
