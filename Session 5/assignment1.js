// Assignment 1
// Given an array of string join them with a comma ,
// Sample Input - ["HTML", "CSS", "JAVA", "JS"]
// Sample Output - HTML,CSS,JAVA,JS

let array = ["Chess", "Badminton", "Cricket", "Football", "Tennis"];
let string = "";

for (let i = 0; i < array.length; i++) {
  if (i == 0) {
    string += array[i];
  } else {
    string += ", " + array[i];
  }
}

console.log(string);

// let str = "";

// for (let i = 0; i < array.length - 1; i++) {
//   string += array[i] + ", ";
// }

// string += array[array.length - 1];

// for (let j = 0; j < string.length - 2; j++){
//     // console.log(string[j]);
//     str += string[j]
// }

// console.log(str);

// console.log(string);
