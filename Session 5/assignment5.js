// Assignment 5
// Given a matrix print the first diagonal
// Sample Input:  [[1, 2, 3], [4, 5. 6], [7, 8, 9]]
// Sample Output: 1, 4, 9

array = [
  [1, 12, 123],
  [4, 45, 456],
  [7, 78, 789],
];

for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++){
        if (i == j) {
            console.log(array[i][j]);
        }
    }
}