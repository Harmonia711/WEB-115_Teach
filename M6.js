// Conditional Statements && Logical Operators
//          Used to combine or manipulate boolean values
//          (true or false)
/*
            AND = && (python version = and)
            OR = || (python version = or)
            NOT = ! (python version = not) // Reverses the boolean check. 
*/

let x = true;
let y = false;
let z = true;

// Simple boolean check

if(x){
    console.log("this is true")
} else{
    console.log("this is false")
}

// The AND && Operator

if(x && y){
    console.log("x and y are true")
}else{
    console.log("x and y together are not true")
}

// The OR || operator

if(x || y){
    console.log("x or y is true")
}else{
    console.log("Neither x nor y are true")
}


const temp = 31;

// Check a range of numbers with if-else if-else blocks

if(temp > 0 ){ // Temp above 0 is good.
    console.log("The weather is good. ")
}
else if(temp == 32){ 
    console.log("The temperature has just hit freezing.")
}
else{
    console.log("The weather is bad.")
}


// Check a range of numbers with logical operators

// Version 1: Using the AND (&&) operator

let temperature = 75;

if (temperature > 70 && temperature < 80) {
  console.log("Ideal temperature range.");
} else {
  console.log("Temperature is not ideal.");
}

temperature = 65; // Change the temperature

if (temperature > 70 && temperature < 80) {
  console.log("Ideal temperature range.");
} else {
  console.log("Temperature is not ideal.");
}


// Version 2: Using the OR (||) operator

temperature = 95;

if (temperature > 90 || temperature < 60) {
  console.log("Warning: Extreme temperature!");
} else {
  console.log("Temperature is within acceptable range.");
}

temperature = 75; // Change the temperature

if (temperature > 90 || temperature < 60) {
  console.log("Warning: Extreme temperature!");
} else {
  console.log("Temperature is within acceptable range.");
}



// Version 3: Using the NOT (!) operator

temperature = 55;

if (!(temperature > 100 || temperature < 50)) { // NOT (too hot OR too cold)
  console.log("Temperature is acceptable.");
} else {
  console.log("Temperature is extreme (too hot or too cold).");
}

temperature = 110; // Change the temperature

if (!(temperature > 100 || temperature < 50)) { // NOT (too hot OR too cold)
  console.log("Temperature is acceptable.");
} else {
  console.log("Temperature is extreme (too hot or too cold).");
}


// Example combining operators

temperature = 85;

if ((temperature > 80 && temperature < 90) || temperature < 60) {
  console.log("Uncomfortable temperature.");
} else {
  console.log("Temperature is okay.");
}

temperature = 50;

if ((temperature > 80 && temperature < 90) || temperature < 60) {
  console.log("Uncomfortable temperature.");
} else {
  console.log("Temperature is okay.");
}

temperature = 75;

if ((temperature > 80 && temperature < 90) || temperature < 60) {
  console.log("Uncomfortable temperature.");
} else {
  console.log("Temperature is okay.");
}

// The NOT ! operator

const isSunny = true;

if(isSunny){
    console.log("It is Sunny")
}else{
    console.log("It is Cloudy")
}

if(!isSunny){
    console.log("It is Sunny")
}else{
    console.log("It is Cloudy")
}

// Equality & Strict Equality
/* = assignment operator
    == comparison operator (compare if values are equal.)
    === strict equality operator (compare if values & datatype are equal)
    != inequality operator
    !== strict inequality operator
*/

const PI = 3.14; // datatype of number
console.log(typeof PI);


if(PI == "3.14"){
    console.log("That is Pi.")
}else{
    console.log("That is NOT Pi.")
}
// The string of 3.14 is == the number 3.14 in JavaScript. 


if(PI === "3.14"){
    console.log("That is Pi.")
}else{
    console.log("That is NOT Pi.")
}


// If the two are not equal, this evaluates to true. (triggers the if statement)
// But what happens here?
if(PI != "3.14"){
    console.log("That is NOT Pi.")
}else{
    console.log("That is Pi.")
}

// Here the two are STRICTLY inequal, evaluating to be true. Triggering the if statement. 

if(PI !== "3.14"){
    console.log("That is NOT Pi.")
}else{
    console.log("That is Pi.")
}