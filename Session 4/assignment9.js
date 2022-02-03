// Assignment 9
// Given a sentence print the count of words (Separated by a space character)
// Sample Input- "Coding is Easy"
// Sample Output:- 3

let str = "The quick brown fox jumps over the lazy dog";

let word = "";
let result = [];

for (let i = 0; i < str.length; i++) {
  if (str[i] == " ") {
    result.push(word);
    word = " ";
  } else {
    word += str[i];
  }
}

result.push(word);

console.log(result.length);
