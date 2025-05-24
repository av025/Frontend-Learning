//! Difference between var and let variable

//* var variable
// var variable creates the global and function scope means we can accees this variable any where in our code it does not bound with any block-scope and we can redeclare that variable also which create confusion and error-prone our code nowadays we use let and const mainly.

//* let variable
// let variable creates the block-scope means it was bound with that block scope only and it's visibility and accessibility was upto that block only and let variable was not-redeclare it give error

//? Understand let and const variable with example demonstration
var personOne = "Aayush"; //* Initialize the variable with personOne
{
  console.log(personOne); //* here we can access the vaiable personOne inside this block-scope variable
  let personSecond = "Kratik"; //* Initialize the variable with personSecond
  console.log(personSecond); // Output : Kratik
  //* re-declare the variable personOne;
  var personOne = "Rahul";

  //* re-declare the variable personSecond 
//   let personSecond = "Prateek"  //! It give error when we re-declare variable it give Syntax-Error
}

console.log(personOne);  // Output : Rahul 