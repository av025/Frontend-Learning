//! Types of Scopes in Javascript  
//* There are two types of scopes in javascript : 
//? 1st. Lexical Scopes 
//? 2nd. Dynamic type of scope 

//? 1st. Lexical Scope 
//* "Lexical" comes from "lex" (short for lexical analysis), which is a phase in the compiler where code structure is analyzed.
//* Lexical scope means that the scope of variables is determined at compile time (or parse time).
//* This means that the structure of your code—where variables and functions are written—decides their accessibility.
//* All scopes are created during the parsing phase, before the code is executed.

//? 2nd. Dynamic Scope (Note: JavaScript does NOT use dynamic scope)
//* In a dynamic scope, variables are resolved based on the call stack (runtime), not on where they are written in the code.
//* This means the scope is determined at runtime based on the caller function, not the written code structure.
//* An example of this behavior is seen in older programming languages like Bash or older versions of Lisp "Programming language".



//? Understand Lexical Scope and Dynamic Scope with example : 
const person = "Aayush"; 
//todo: Parsing phase :-  this person variable declare in global scope.
//* Execution phase : value "Aayush" assign to this  variable person  

//todo: Parsing phase :-  this function ask also declare in global scope 
function ask(question) {
    // No formal declaration in this ask function scope 
    console.log(person , question); 
    //* Now it check both the person and question was define to this function scope or not.
    //* Here we see that question was local variable which assing the value "Do you have extra Pen ?" 
    //* This question was not declare in this function scope so it looks in above  level scope or we say parent scope so where it declare so it assign the value "Aayush"
}; 
//* Execution phase : No assignment was done to this function declaration because we can't call the function 

//todo: Parsing phase :-  this function askingQuestion declare in this global scope
function askingQuestion() {
    var person = "Krateek"; 
    //todo: Parsing phase :- this person was define in the scope of function 
    //* The value "Krateek" was assign to this variable which was in function scope. 
    ask("Do you have extra Pen ?");
    //* Now we are calling this ask function now we start assign value to this function scope at execution phase. 

    //! In the case of dynamic scoping we see that we call ask function in this function scope so it was taking person value from this scope because we are calling in this function but javascript prefer "lexical scope" so that's why our person value resolve from global scope person variable.
}
//* Execution phase : No assignment was done to this function declaation because we can't call the function 

askingQuestion(); 
//* Execution phase : Now we start calling the function now we assign value to function scope askingQuestion()