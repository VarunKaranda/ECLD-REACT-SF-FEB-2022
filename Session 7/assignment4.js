// Assignment 4
// Given an array , find the unique elements .
// Sample Input: [10, 20, 30, 10, 40, -2]
// Sample Output: 20, 40, -2

let array = [2, 4, 6, 2, 8, 6, 2, 8, 4, 8, 9, 10];
let obj = {};
let newArray = [];

for (let i = 0; i < array.length; i++) {
  if (obj[array[i]]) {
    obj[array[i]] = obj[array[i]] + 1;
  } else {
    obj[array[i]] = 1;
  }
}

for (keys in obj) {
  if (obj[keys] === 1) {
    newArray.push(keys);
  }
}

console.log(newArray.join(","));
