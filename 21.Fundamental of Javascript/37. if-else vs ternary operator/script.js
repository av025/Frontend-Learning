//! If-else Statement vs Ternary Operator  
//* Now Ternary operator was short hand of the if-else system if the code of instruction was one line than we use the ternary operator.


//? Example of if statement 

let studentHaveId = true; 
// intialize the variable 

if(studentHaveId) {
    console.log("Student can enter in a college"); 
}else {
    console.log("Student can't enter in the college")
}
//! Instead of  write multiple code with if-else statement with the help of ternary operator which was syntatical sugar we can write this condition in single line 

//* re-assign the value 
studentHaveId = false;

//? Ternary Operator 
const ternaryOperatorUsage = studentHaveId ? "Student can enter in a college" : "Student can't enter in the college"; 
//* Here we create constant ternaryOperator Usage to example purpose of ternanry operator 
console.log(ternaryOperatorUsage);