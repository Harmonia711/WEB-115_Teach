// 1D Array = a variable like structure that can hold more than 1 value.
// 1D Array = a list from Python 

let fruits = ["apple", "orange", "banana"];

// fruits[3] = "coconut"; // Add to new [3] of the array

fruits.push("coconut") // Add element to end of array.
fruits.pop(); // Remove last element.
fruits.unshift("mango") // Add element to beginning of array.
fruits.shift(); // Remove element from beginning. 

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

let numOfFruits = fruits.length;
console.log(numOfFruits);

let index = fruits.indexOf("apple"); // Search for index of matching.
// If .indexOf doesn't find a match, then returns -1. 
// Use in an if statement to do something if no match (if .indexOf() = -1...)

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// Iterate through array backwards.
for(let i = fruits.length -1; i >= 0; i--){
    console.log(fruits[i]);
}


// Enhanced for loop

for(let fruit of fruits){
    console.log(fruit);
}

// Sort method
fruits.sort();
// Reverse sort.
fruits.sort().reverse(); 

// 2D Arrays = a multi-dimensional array that stores a matrix
//              of data in rows and columns.
//              Useful for games, spreadsheets, image representation.

//          [x, O, X]
//          [O, X, O]
//          [X, O, O]

const matrix = [[1, 2, 3], 
                [4, 5, 6], 
                [7, 8, 9]];
for (let row of matrix){
    console.log(row) // 1st
    // 2nd
    const rowString = row.join(' ');
    console.log(rowString)
}

// matrix[row][column]
matrix[0][0] = 'X';
matrix[0][1] = 'O';
matrix[0][2] = 'X';
matrix[1][0] = 'O';
matrix[1][1] = 'X';
matrix[1][2] = 'O';
matrix[2][0] = 'X';
matrix[1][1] = 'O';
matrix[1][2] = 'X';

const numPad = [[1, 2, 3], 
                [4, 5, 6], 
                [7, 8, 9], 
                ['*', 0, '#']]; 

// Objects = like a dictionary in Python.
// NOT the same as "Objects" from the term Object-Oriented Programming!!!
let person = {
    // Name/Value pairs
    firstName: "John", 
    lastName: "Smith",
    age: 46,
    email: "john@email.com"
}

console.log(person)
// Dot notation
console.log(person.firstName)

// Bracket Notation

// console.log(person[age]) // Will not work.  
console.log(person["age"])
console.log(person["age"] + 10) 

// Looping through Object
for (i in person){
    // console.log[i]; // Will not work
    // console.log(person.i) // Also will not work.
    console.log(person[i])
}

for (i in person){
    console.log(i + ": " + person[i]);
}