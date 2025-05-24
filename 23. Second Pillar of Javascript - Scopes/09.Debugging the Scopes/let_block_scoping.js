//! Let Block Scoping in Javascript 
//* Let's understand block scoping in javascript with the help of this code execution 
//* As we know that javascript was execute in two phases one was Parsing phase and second was Execution phase  

//? Parsing Phase was represent by with this comment 
//* Execution Phase was represent by this comment 
//todo:  " Execution Phase inside function was represent by this comment "  
//! This comment represent the Conclusion of the variable  

var person = "Aayush Vyas";  
//? person variable was declare in the global scope 
//* In Execution phase this value "Aayush Vyas" was assign to this global scope variable "person"
function fun() {
    //!  We can access the variable before the initialization if it was created by var keyword but the value was undefined 
    console.log(person);   //* Output was undefined   
    var person = "Kratik Vyas";
    //? Variable person was declare in this function scope 
    //todo : "Kratik Vyas" assign  value to this person variable 
    //! When we access the variable before it's initialization or declaration than it give error Reference-error that we can't access the value before it creates "Temporal Dead Zone"  Whenever we create variable with the help of let and const than we cannot accees value before the initialization and declaration of variable. 
    // console.log(content); //* Give Reference Error 
    let content = "JS"; 
    //! Whenever we create variable to let keyword or const keyword it was always create block scope it means that we cannot access  that variable outside of that scope there visibility and accessibility was upto that particular scope only but Javascript support lexical scoping that means we can access that variable in our child-block 

    //? Variable content was declare in this function scope 
    //todo : "JS" assign value to this person variable 
    
    //? In parsing phase the if-block declare in this function scope which create the block scope 
    if(content === "JS") {
         let hours = "120+"; 
        //? this hours variable declare in this block-scope 
        console.log(hours); 
      //todo : "120+" assign value to this person variable 
    }; 

    console.log(person , ",", content); 
    // console.log(hours) //! It give error to us because hours variable was create with let-block scope 
    //todo: It look that person was declare in this function scope and assign "Kratik Vyas" and content variable was assign to this "JS" value 
}; 
//? function fun was declare in this global scope 
//* In Execution phase no value assign to this fun function we assign the value at the time of calling the function 

fun(); 
//* We calling the function means do execution fun() so we assign the value to it in it's function scope 

console.log(person); 
//todo: person global scope variable was assign the value "Aayush Vyas" 

