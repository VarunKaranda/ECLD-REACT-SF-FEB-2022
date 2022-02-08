// Assignment 3
// Given an array of game, scores print the highest and lowest score
// Sample Input - [100, 20, 31, 150, 39, 72]
// Sample Output - 150 
// 		            20

let array = [21, 41, 19, 26, 9, 18, 32];

let highest = array[0];
let lowest = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > highest) {
    highest = array[i];
  } else if (array[i] < lowest) {
    lowest = array[i];
  }
}

console.log(highest);
console.log(lowest);