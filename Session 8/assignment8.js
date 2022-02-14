// Assignment 8
// Given an array of strings print the snake case of the strings [Assume Small case strings]
// Sample Input - ["edstem", "tech"]
// Sample Output  edstem_tech

let array = ["Chess", "Badminton", "Cricket", "Football", "Tennis"];

let newString = array.reduce(function (string, e ) {
    return string + "_" + e
})

console.log(newString);