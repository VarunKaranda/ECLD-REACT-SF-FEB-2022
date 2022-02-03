// Assignment 5
// Given an array of numbers, change the multiples of 3 to ‘multiple’
// Sample Input: [5, 9, 8, 12, 22, 18]
// Sample Output: [5, ‘multiple’, 8, ‘multiple’, 22, ‘multiple’ ]

let array = [10, 20, 30, 40, 50, 60];

for (i = 0; i < array.length; i++) {
  if (array[i] % 3 === 0) {
    array[i] = "multiple";
  }
}

console.log(array);
