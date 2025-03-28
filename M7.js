// DOM TECHNIQUES

// ADD ELEMENT TO PAGE

// SET VARIABLE TO ELEMENT WE WANT TO ADD TO
const body = document.body // WE CAN NOW APPEND ELEMENTS TO THE BODY
console.log(body)

// APPEND AND APPENDCHILD
// append = You can Append Strings
// appendChild = Errors when appending strings. Only works with appending elements.

body.append("Hello World", "Bye") // Append can also append multiple at once.

// CREATE ELEMENTS
const div = document.createElement('div');
// Check source in dev tools.
// Need to add to page
body.append(div); // open up source and see new div in body.

// To add text to div (2 ways)
div.innerText = "Hello World"
div.textContent = "Hello World 2"

// Modify HTML

// Try
//div.innerText = "<strong>Hello World 2</strong>"
// Then
// div.innerHTML = "<strong>Hello World 2</strong>" 
// Don't let users input on .innerHTML. Prevent HTML injections!!!

// You can also do this:
const strong = document.createElement("strong") // Creates bold box
strong.innerText = "Hello World 2"
div.append(strong)

// create <span id = "hi">Hello</span>
//        <span id = "bye"Bye</span>

// Target class and element
const div2 = document.querySelector('div') // Grab div
const spanHi = document.querySelector('#hi') // Grab id hi
const spanBye = document.querySelector('#bye') // Grab id bye
// spanBye.remove() // Remove spanBye from existence // Check source in dev tools
// removeChild() also works.
div.append(spanBye) // Restore spanBye back into the universe.

// Go to HTML and check out .replaceChild()


// Modifying Element Attributes

// Get their ID
// console.log(spanHi.getAttribute('id')) // OR...
// console.log(spanHi.id) // Prints hi
// console.log(spanHi.title) // Prints Hello

// Set their ID
// console.log(spanHi.setAttribute("id", "newID")) // Check source

// // Remove their ID
// spanHi.removeAttribute("id")

// DOM Traversal

const main = document.getElementById("main")
console.log(main)
main.textContent = "New Text on Main"
main.style.backgroundColor = "yellow"

function changeColor(element, color) {
    element.style.backgroundColor = color
}

changeColor(main)
const parents = document.getElementsByClassName("parent")
console.log(parents)

// parents.forEach(changeColor) // Won't work. Ask class what happened? This doesn't have a forEach method attached when we run normal const parents.
// Fix = set const parents = Array.from(document.getElementsByClassName("parent")) // This array now has a forEach method and is compatible.



// Introduce query selector and grandparent div
const grandparent = document.querySelector(".grandparent") // grabs a single element with specified class
console.log(grandparent)

changeColor(grandparent, "#e0c297")

// Create new array for parents from grandparent
const parents2 = Array.from(grandparent.children)
console.log(parents2)
parents2.forEach(element => changeColor(element, "green")) // change parents to red

// Grab first parent from the parents2 array.
const parentOne = parents2[0];
console.log(parentOne)

// Create new array of children of ParentOne
const childrenOfParentOne = parentOne.children
console.log(childrenOfParentOne)

changeColor(childrenOfParentOne[0], "purple")

// Introduce .querySelectorAll()
const children = grandparent.querySelectorAll('.child')
console.log(children)

// Change all children colors
children.forEach(element => changeColor(element, "blue"))

// Change one child color
const childOne = childrenOfParentOne[0]
console.log(childOne)
changeColor(childOne, "purple")

// Select a parent from a child
const parent1 = childOne.parentElement
console.log(parent1)
changeColor(parent1, "orange")

// Select a parent of a parent (grandparent)
const grandpa = parent1.parentElement
console.log(grandpa)
changeColor(grandpa, "pink")

// Skip parent, go from child to grandparent
const grandma = childOne.closest('.grandparent')
console.log(grandma)

// Next element sibling
const childTwo = childOne.nextElementSibling
console.log(childTwo)
changeColor(childTwo, "white")

// Previous element sibling
childOneAgain = childTwo.previousElementSibling
console.log(childOneAgain)
changeColor(childOneAgain, "lightblue")




let firstItem = document.getElementById("list").firstChild;
console.log(firstItem.textContent);

let elementToRemove = document.getElementById("removeMe");
elementToRemove.parentElement.removeChild (elementToRemove);

let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
document.body.appendChild (newParagraph);

let targetElement = document.getElementById("target");
let newNode = document.createElement("li");
targetElement.parentElement.__________ (newNode, targetElement);