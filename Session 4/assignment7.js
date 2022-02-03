// Assignment 7
// Given a string split it into an array of words
// Sample Input - "Edstem Technologies located at kerala"
// Sample Output - ["Edstem", "Technologies", ‘located’, ‘at’, ‘kerala’]
// Note: Don’t use str.split(‘ ‘) method
// Hint: you can use for loop and push method

let str = "The quick brown fox jumps over the lazy dog";

let word = "";
let result = [];

for (let i = 0; i < str.length; i++) {
  if (str[i] == " ") {
    result.push(word);
    word = "";
  } else {
    word += str[i];
  }
}

result.push(word);

console.log(result);
