// Assignment 8
// Given an 2d Array print the difference of first and second diagonals sum
// Sample Input - [
// 		[1, 2, 3],
// 		[4, 5, 6],
// 		[7,  8, 9]
// ]
// 	Sample Output - First Diagonal -> 1+5+9 ->  15
// 			Second Diagonal -> 3+5+7 -> 15
// 			Difference => 15-15 -> 0

let array = [
  [1, 12, 123],
  [4, 45, 456],
  [7, 78, 789],
];
let diagSum1 = 0;
let diagSum2 = 0;

for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array[i].length; j++){
        if (i==j) {
            diagSum1 += array[i][j];
        }
        if (i + j === array.length - 1) {
          diagSum2 += array[i][j];
        }
    }
}

console.log(`Diagonal Difference = ${diagSum1 - diagSum2}`);