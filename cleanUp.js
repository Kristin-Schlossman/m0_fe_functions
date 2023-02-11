// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
  console.log("Hello, what is your name?"); 
}

askForName();
// made adjusments to the layout of the function for readabiity and added semicolons. 

// EX 2:
function addThreeNums(first, second, third) {
    var sum = first + second + third
    return (sum);
    
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// removed indented curly bracket. Indented all lines within the function definition.  
// I added console.log to the called function to make sure it worked. It did, so I deleted it. 

// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();

// turned "func" into keyword function to define the funciton. Seperated curly bracket. 

//  EX 4:
function average(num1, num2) {
    var sum = num1 + num2;
    var avg = sum / 2;

    return avg
  }

  //changed location of curly bracket. In the documentation it seamed like every item in the
  // defined variable was indented, and then everything outside of it was not, so that's what I did. 
  //I tested this code by calling the function within a console.log:  console.log(average(2,8)); 
  // and 5 printed. That's right, so the code is working, 
