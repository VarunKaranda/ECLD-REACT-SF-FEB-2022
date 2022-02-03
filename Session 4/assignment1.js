// Assignment1
// Given an array of strings count all the vowel characters
// Sample Input - [‘edstem’, ‘react’, ‘javascript’, ‘html’, ‘css’ ]
// Sample Output - 7

let array = ["Chess", "Badminton", "Cricket", "Football", "Tennis"];
let count = 0;

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (array[i][j] === "a" ||array[i][j] === "e" ||array[i][j] === "i" ||array[i][j] === "o" ||array[i][j] === "u" ||array[i][j] === "A" ||array[i][j] === "E" ||array[i][j] === "I" ||array[i][j] === "O" ||array[i][j] === "U") {
      count++;
    }
  }
}

console.log(count);
