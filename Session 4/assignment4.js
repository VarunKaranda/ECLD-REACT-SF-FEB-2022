// Assignment 4
// Given an array of strings, remove all the odd length strings from it
// Sample Input: [‘edstem’, ‘react’, ‘html’, ‘foodie’, ‘coder’’  ]
// Sample Output: [ ‘edstem’, ‘html’, ‘foodie’ ]

let array = ["Chess", "Badminton", "Cricket", "Football", "Tennis"];
let newArray = []

for (let i = 0; i < array.length; i++) {
    if (array[i].length % 2 === 0) {
        newArray.push(array[i])
    }
}

array = newArray

console.log(array);
