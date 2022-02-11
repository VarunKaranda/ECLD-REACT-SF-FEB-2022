// Assignment 5
// Given two words (small case) if they are anagrams print "TRUE" otherwise "FALSE" https://en.wikipedia.org/wiki/Anagram
// Sample Input 1 - den , end
// Sample Output 1 - TRUE
// Sample Input 2 - hello, heloo
// Sample Output 2 - FALSE

let word1 = "anagram";
let word2 = "nag a ram";

word1 = word1.split(" ").join("").split("").sort().join("");
word2 = word2.split(" ").join("").split("").sort().join("");

if (word1 === word2) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}