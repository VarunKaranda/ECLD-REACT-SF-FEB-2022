// Assignment 6
// Given an array of string generate an array whose first or last character is a
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]

let array = ["chess", "badminton", "cricket", "soccer", "tennis"];

for (let i = 0; i < array.length; i++) {
  if (array[i][0] === "s" || array[i][array[i].length - 1] === "s") {
    console.log(array[i]);
  }
}
