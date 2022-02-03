// Assignment 5
// Print the average of all the numbers from 1 to given limit
// Sample Limit - 5,
// Output - 3 (1+2+3+4+5 = 15/5 = 3)

let limit = 100;
let start = 1;
let sum = 0;

while (start <= limit) {
  sum += start;
  start++;
}

//OR

// for (let i = start; i <= limit; i++) {
//   sum += i;
// }

let average = sum / limit;

console.log(`Average of first ${limit} numbers is ${average}`);
