// Assignment 6
// Find out the average of the first 100 n natural numbers using for loop.

let i = 1;
let sum = 0;

while (i <= 100) {
  sum += i;
  i++;
}

//OR

// for (i = 1; i <= 100; i++) {
//   sum += i;
// }

let average = sum / 100;

console.log(`Average of first 100 Natural Numbers is ${average}`);
