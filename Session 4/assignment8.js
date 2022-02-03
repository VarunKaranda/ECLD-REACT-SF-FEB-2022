// Assignment 8
// Given a string print all the Characters in the odd position (Start counting with 0)
// Sample Input - ‘Edstem’
// Sample Output: dtm

let string = "pneumonoultramicroscopicsilicovolcanoconiosis";

for (let i = 1; i < string.length; i += 2){
    console.log(string[i]);
}