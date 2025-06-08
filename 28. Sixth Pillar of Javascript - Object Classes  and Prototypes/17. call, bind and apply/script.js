//! Call, Bind, and Apply Methods in JavaScript
//* These methods allow us to manually bind the 'this' keyword to a specific object.

//! bind() method
// Understanding bind method with an example

const playerOne = {
  firstname: "Virat",
  lastname: "Kohli",
  battingPosition: "Top Order",
  roleInTeam: "Batsman",
  battingNumber: 3,
  displayInfo: function () {
    console.log(
      `Player name ${this.firstname} ${this.lastname} and role in the team is ${this.battingPosition} ${this.roleInTeam}, batting at number ${this.battingNumber} position`
    );
  },
};

//* Let's call displayInfo normally
// playerOne.displayInfo();

//? Now let’s move displayInfo outside and manually bind it to playerOne using bind()

const display = function () {
  console.log(
    `Player name ${this.firstname} ${this.lastname} and role in the team is ${this.battingPosition} ${this.roleInTeam}, batting at number ${this.battingNumber} position`
  );
};

//* The bind() method creates a new function with 'this' bound to the specified object
const bindMethod = display.bind(playerOne); 
bindMethod(); 
//* Output: Player name Virat Kohli and role in the team is Top Order Batsman, batting at number 3 position

//* We can also bind one object’s method to another object:

const playerTwo = {
  firstname: "Rohit",
  lastname: "Sharma",
  battingPosition: "Top Order",
  roleInTeam: "Batsman",
  battingNumber: 2
};

//* Bind playerOne's method to playerTwo’s data
const displayInfo = playerOne.displayInfo.bind(playerTwo);
//? This binds playerOne's method to playerTwo’s context and returns a new function
displayInfo(); 
//* Output: Player name Rohit Sharma and role in the team is Top Order Batsman, batting at number 2 position


//! call() Method 
// Let's understand the call() method with an example

//* Create a function that prints how many centuries a player has scored
const displayHundred = function(firstname, lastname, hundreds) {
  console.log(`Player ${firstname} ${lastname} has scored ${hundreds} centuries`);
};

//* Using call(): we set the 'this' manually and pass arguments one-by-one
const callMethod = displayHundred.call(playerOne, playerOne.firstname, playerOne.lastname, 81);
//* Notes:
//* - First argument is the 'this' value (playerOne)
//* - Rest of the arguments are passed individually
//* - call() does not return a new function — it immediately invokes the function

console.log(callMethod);  
//* Output: Player Virat Kohli has scored 81 centuries
//* Output: undefined (because displayHundred doesn’t return anything)


//! apply() Method 
// apply() works just like call(), but arguments are passed as an array
displayHundred.apply(playerTwo, [playerTwo.firstname, playerTwo.lastname, 49]);
//* Here:
//* - First argument is the 'this' value (playerTwo)
//* - Second argument is an array of parameters
//* - Just like call(), apply() immediately invokes the function

//* Note: Just like bind, both call and apply also use their own 'this' context internally


