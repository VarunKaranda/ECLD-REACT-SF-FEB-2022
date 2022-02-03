// Assignment 4
// Given a starting number and a decrement value, print all numbers from the starting number till zero deducting the decrement value each time. Starting - 13, Decrement - 4
// Output :
// 13
// 9
// 5
// 1

let start = 28
let decrement = 5

while (start > 0) {
    console.log(start);
    start -= decrement
}

//OR

// for (let i = start; i > 0; i -= decrement){
//     console.log(i);
// }
