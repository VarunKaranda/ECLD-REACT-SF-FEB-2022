// Assignment 10
//Given an 2d array print the mid column
// Sample Input - [
// 		[1, 2, 3],
// 		[4, 5, 6],
// 		[7,  8, 9]
// ]
// 	Sample Output - 2, 5, 8

matrix = [
  [1, 12, 123, 1232, 12321],
  [4, 45, 456, 4565, 45654],
  [7, 78, 789, 7898, 78987],
  [10, 1011, 101112, 10111211, 1011121110],
  [12, 1314, 131415, 13141514, 1314151413],
];

let string = "";

for (let i = 0; i < matrix.length; i++) {
  // console.log(matrix[i][(matrix[i].length - 1) / 2]);
  if (
    matrix[i][(matrix[i].length - 1) / 2] ==
    matrix[0][(matrix[i].length - 1) / 2]
  ) {
    string += matrix[0][(matrix[i].length - 1) / 2];
  } else {
    string += "," + matrix[i][(matrix[i].length - 1) / 2];
  }
}

console.log(string);
