// Assignment 3
// Write a function isOdd which returns a boolean value based the number is odd or not

function isOdd(number) {
    if (number % 2 == 1) {
        return true
    } else {
        return false
    }
}

let result = isOdd(10)

console.log(result);