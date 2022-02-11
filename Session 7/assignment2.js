// Assignment 2
// Given a string , calculate the occurrence of each and every character and print the output.
// Sample Input: ‘edstem’
// Sample Output: e - 2
// 		 d - 1
// 		 s - 1
// 		 t - 1
// 		 m - 1


let string = "pneumonoultramicroscopicsilicovolcanoconiosis";
let object = {};

for (let i = 0; i < string.length; i++) {
  if (object[string[i]]) {
    object[string[i]] = object[string[i]] + 1;
  } else {
    object[string[i]] = 1;
  }
}

for (key in object) {
  console.log(`${key} - ${object[key]}`);
}



// let string = "pneumonoultramicroscopicsilicovolcanoconiosis";

// for (let i = 0; i < string.length; i++) {
//   let count = 0;
//   for (let j = 0; j < string.length; j++) {
//     if (string[i] == string[j] && i > j) {
//       break;
//     }
//     if (string[i] == string[j]) {
//       count++;
//     }
//   }
//   if (count > 0) {
//     console.log(`${string[i]} - ${count}`);
//   }
// }
