// Assignment 8
// Given a string print all the consonants which are not a,e,i,o,u using for loop.

let string = "Amalapuram";

for (i = 0; i < string.length; i++) {
    if (
        string[i] !== "A" &&
        string[i] !== "E" &&
        string[i] !== "I" &&
        string[i] !== "O" &&
        string[i] !== "U" &&
        string[i] !== "a" &&
        string[i] !== "e" &&
        string[i] !== "i" &&
        string[i] !== "o" &&
        string[i] !== "u"
    ) {
        console.log(string[i])
    }
  }