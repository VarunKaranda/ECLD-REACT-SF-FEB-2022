// Assignment 7
// Given an array of strings print the snake case of the strings [Assume Small case strings]
// Sample Input - ["edstem", "tech"]
// Sample Output - edstem_tech

let array = ["Chess", "Badminton", "Cricket", "Football", "Tennis"];
let string = "";

for (let i = 0; i < array.length; i++) {
  if (i == 0) {
    string += array[i];
  } else {
    string += "_" + array[i];
  }
}

console.log(string);