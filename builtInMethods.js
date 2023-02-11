// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


"Hello World".includes("Hello");
// No arguements are passed, which is to say this isn't a function being called. It's just a boolean that will return "true" 
// The .includes() method is being called on the string "Hellow World" and it's asking, "Does the string include 'Hello'?"

"Hello World".endsWith("Hello");
// No arguements are passed, which is to say this isn't a function being called. 
// It's just a boolean that will return "false" 
// The method .ends with is being called on the string "Hello World"

"Hello World".endsWith("rld");
// No arguements are passed, which is to say this isn't a function being called. 
// It's just a boolean that will return "true" 
// The method .ends with is being called on the string "Hello World"


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
var firstName = "Jeff";
console.log(firstName.startsWith("J"));
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.

var homeState = "Washington"
var currentState = "  Oregon  "
console.log(homeState.includes("a"));
// The .includes method is being called on the homeState string, which stores the string object "Washington"
// The return value, which prints to the console, is true. 
// The .includes() method returns true because the string object "Washington" does contain "a", the arugement passed in.

console.log(currentState.trim());
//The .trim() is being called on the currentState String, which stores the string object "Oregon" but with some extra spaces
//the return value removes those spaces. 

// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var norwegianNums = ["En", "To", "Tre"];
var numberal = [1, 2, 3];

norwegianNums.pop();
console.log(norwegianNums);
//The .pop() is being called on the norwegianNums array, which stores the string object spellings of 1, 2, and 3 in norwegian
//The pop method removes the last element in the array, and returns a new array of a different length

console.log(numberal.shift());
//The .shift method is being called on the numeral array and printing to the console. 
//This method removes the first element, and returns what was removed. 
