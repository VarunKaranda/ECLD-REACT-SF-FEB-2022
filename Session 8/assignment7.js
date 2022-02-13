// Assignment 7
// Given an array of string generate an array whose first or last character is s
// Sample Input - ["chess", "badminton", "cricket", "soccer", "tennis"]
// Sample Output - ["chess", "soccer", "tennis" ]

let array = ["chess", "badminton", "cricket", "soccer", "tennis"];

let newArray = array.filter(function (e) {
  return e[0] === "s" || e[e.length - 1] === "s";
});

console.log(newArray);