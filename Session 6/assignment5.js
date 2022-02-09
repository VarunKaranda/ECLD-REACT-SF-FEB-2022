// Assignment 5
// Write a function to calculate the average of an array. If there are no items in the array it should return 0

let array = [];

function arrayAverage(array) {
    if (array.length === 0) {
        return 0;
    } else {
        let sum = 0
        for (let i = 0; i < array.length; i++){
            sum += array[i]
        }
        let average = sum/array.length
        console.log(average);
    }
}

arrayAverage(array)