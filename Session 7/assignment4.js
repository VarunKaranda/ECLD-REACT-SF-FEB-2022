// Assignment 4
// Given an array , find the unique elements .
// Sample Input: [10, 20, 30, 10, 40, -2]
// Sample Output: 20, 40, -2

let array = [2, 4, 6, 2, 8, 6, 2, 8, 4, 8];
let obj = {}

for (let i = 0; i < array.length; i++){
    obj[array[i]] = i
}

console.log(Object.keys(obj).join(", "));