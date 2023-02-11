// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    return  `hey there`
}
console.log(greeting());

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `Hi, how are you ${name}`
}
console.log(customGreeting("Annabelle"));

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(firstName, middleName,lastName) {
    var fullName = firstName + middleName + lastName
    return `thanks for signing up ${fullName}!`
}
console.log(greetPerson("Michelle ", "Lee ", "Town"));
// QUESTION FOR PROFESSORS: this seems inelligant. Is there a better way to do this? 

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function numSquared(n) {
    var square = n*n;
    return square;
}
console.log(`5 squared is: ${numSquared(5)}`);
// This feels like cheating a bit! Ha! 
// Ideally I would've rathered use "n squared is..." where n is a variable that can be updated in the arguement
// but I couldn't quite figure out how to make that happen

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(quantity, item) {
    if(quantity>=4 && item === "Coffee") {
        return `${item} is stocked`
    }
}
checkStock(4, "Coffee");
// => "Coffee is stocked"
//I'm very proud I got this to work!!!!

function checkStock(quantity, item){
    if(quantity<=3 && item === "Tortillas") {
        return `${item} - running LOW`
    }
}
checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

function checkStock(quantity, item){
    if(quantity===0 && item === "Cheese") 
        return `${item} - OUT of stock!`
}
checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

function checkStock(quantity, item) {
    if(quantity===1 && item === "Salsa") {
        return `${item} - running LOW`
    }
}
checkStock(1, "Salsa");
// => "Salsa - running LOW"

//all of these run individually in replit, but when they're stacked like this they return undefined. 
//I'd imagine it's because the same function is being called and then changed. 
//okay as is?