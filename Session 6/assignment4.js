// Assignment 4
// Write a function function which prints the odd numbers from 0 to a given limit(included)

function oddNums(limit) {
    for (let i = 1; i <= limit; i += 2){
        console.log(i);
    }
}

oddNums(100)