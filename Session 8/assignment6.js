// Assignment 6
// Given an array of string generate an array with their first characters
// Sample Input - ["Edstem", "Tech"]
// Sample Output - ["E", "T"]

let array = ["Chess", "Badminton", "Cricket", "Football", "Tennis"]

let newArray = array.map(function (e) {
    return e[0]
})

console.log(newArray);