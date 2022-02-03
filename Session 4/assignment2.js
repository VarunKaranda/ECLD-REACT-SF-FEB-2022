// Assignment2
// Given a string print "YES" if it is a palindrome "NO" if it is not one
// A palindrome is a word which reads the same backward as forward, such as madam, bob
// Strings Problem

let string = "amanaplanacanalpanama";
const length = string.length;
let reversedString = "";

for (let i = length - 1; i >= 0; i--) {
  reversedString += string[i];
}

if (string === reversedString) {
  console.log("YES");
} else {
  console.log("NO");
}

//OR
// let flag = 1;
// for (let i = 0; i < length / 2; i++) {
//   if (string[i] !== string[length - 1 - i]) {
//     flag = 0;
//   }
// }
// if (flag === 0) {
//   console.log("No");
// } else {
//   console.log("Yes");
// }
