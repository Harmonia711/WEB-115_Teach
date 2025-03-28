// the "this" keyword
// this refers to the context in which something is happening.
// In the global context, this refers to the global object (window in browsers, global in Node.js).
// In a function, this refers to the global object (window in browsers, global in Node.js).
// In a method, this refers to the object that the method is called on.
// In a constructor, this refers to the instance of the object being created.
// In an object, this refers to the object itself.
// In an event listener, this refers to the element that the event is bound to.
// In a class, this refers to the instance of the class being created.
// In an arrow function, this refers to the lexical scope in which the arrow function was defined.

// There are more complex ways to use this (e.g. with call, apply, and bind), but these are the most common use cases.
// call, apply, and bind will not be covered in this course.


// Using this within functions. //
// EXAMPLE 1: Simple Function
function simpleFunction() {
    console.log(this);
}
simpleFunction(); // In the global context, this refers to the global object (window in browsers, global in Node.js).
// In strict mode, this will be undefined.


// Using this within event listeners //
// EXAMPLE 2: this inside a function called by an Event Listener
// When a function is called from inside of an Event Listener, this refers to the element that triggered the event.

function changeText() {
    this.innerHTML = "Clicked!";
}
document.getElementById("myButton").addEventListener("click", changeText);

// Why use this?
// Using this allows us to create more dynamic and reusable code. 
// For example, we can use the same function for multiple elements.
// It also allows for cleaner code when calling functions from within event listeners.

// SUMMARY:
// this refers to the context in which something is happening.
// In Event Listeners, this refers to the element that triggered the event.
// In functions, this refers to the global object (window in browsers, global in Node.js).
