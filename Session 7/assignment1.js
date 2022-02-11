// Assignment 1
// Given an array with name, age and gender convert it to object and print keys and values by looping over it using for in loop
// Sample Input: [‘radhe’, 22, ‘M’]
// Sample Output: name - radhe
// 		  age - 22
// 		  gender - M

let array = ["Varun", 28, "M"];
let keys = ["name", "age", "gender"]
let object = {};

for (let i = 0; i < array.length; i++){
    object[keys[i]] = array[i]
}

console.log(object)
