// Assignment 2
// Given an array or string print the total no of characters
// Sample Input - ["HTML", "CSS", "JAVA", "JS", "ANDROID"]
// Sample Output - 20

let array = ["Chess", "Badminton", "Cricket", "Football", "Tennis"];
let count = 0;

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    count++;
  }
}

console.log(`Total Number of characters in the given array : ${count}`);