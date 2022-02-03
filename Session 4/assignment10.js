// Assignment 10
// Given an Array of names find out if edstem is there or not, if the given string is there print true or else print false
// Sample Input:  arr = [‘react’, ‘html’, ‘edstm’],
//              str = ‘edstem’
// Sample Output: false => edstm spelling mistake :)

let array = ["Chess", "Badminton", "Cricket", "Football", "Tennis"];
let flag = "false";
let word = "Chess";

for (let i = 0; i < array.length; i++) {
  if (word === array[i]) {
    flag = "true";
  }
}
if (flag === "true") {
  console.log("true");
} else {
  console.log("false");
}
