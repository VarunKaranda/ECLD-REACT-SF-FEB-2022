// Assignment 2
// Write a function to find the absolute difference of two numbers
// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14

function absDifference(a, b) {
    let difference = a - b;
    if (difference < 0) {
        return -1*difference
    } else {
        return difference
    }
}

let result = absDifference(4, 18)

console.log(result);