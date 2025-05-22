//! Case One : 
// Let's understand this: as we know, JS code execution has two main phases:
// 1. Parsing Phase (Compilation Phase)
// 2. Execution Phase (Code Running Phase)

//? 🔵 Parsing Phase (also called Compilation Phase):
// JS engine scans the code line by line and does Hoisting which we understand later 
// - Allocates memory for var, function declarations.
// - For `let` and `const`, it knows they exist but doesn't assign value (they stay in Temporal Dead Zone).

//* 🟢 Execution Phase:
// JS runs the code line by line. Variable values are assigned, functions are invoked, etc.

//todo 🟡 Execution Phase Inside Function (when a function is called)


//! 🔵 In Parsing Phase, variables and functions are hoisted (memory is allocated)

// ✅ Global Scope
const person = "Aayush"; 
//? 🔵 `person` is declared using `const`, so it's block scoped and hoisted but not assigned (TDZ).
//* 🟢 In execution phase, value "Aayush" is assigned to person in global scope.


function fun() { 
    var person = "Kratik"; 
    //? 🔵 `person` is declared with `var`, hoisted to top of `fun()` scope with initial value `undefined`.
    //todo 🟡 During execution, it's assigned the value "Kratik"

    content = "JS"
    //? 🔵 `content` is not formally declared with var/let/const, so it is not hoisted.
    //todo 🟡 During execution, JS doesn't find `content` in local or global scope formally,
    // so it creates a new **implicit global variable** (auto-global) in non-strict mode.
    //! Now this was not good pratice to create variable without formal-declaration it create confusion and bugs in our code.

    console.log(person); 
    //todo 🟡 Prints: "Kratik"
}


//? 🔵 `fun` is hoisted completely to global scope. It's a function declaration.

function foo() {
    var person = "Prateek"; 
    //? 🔵 `person` hoisted with `undefined` inside `foo` scope
    //todo 🟡 Assigned "Prateek" during execution
    console.log(person); 
    //todo 🟡 Prints: "Prateek"
}; 
//? 🔵 `foo` is also hoisted to global scope


//* 🟢 Execution starts here
fun(); 
//todo 🟡 Calls `fun`, assigns values, prints "Kratik"

foo(); 
//todo 🟡 Calls `foo`, assigns values, prints "Prateek"

console.log(person); 
//* 🟢 Prints: "Aayush" (global scope variable)

console.log(content); 
//* 🟢  Prints: "JS"
//! But how is it declared inside function and accessible globally?
//! Because in non-strict mode, JS creates "content" as an auto-global variable when it doesn't find a formal declaration.
//! This auto-global mechanism was happen only the time of variable creation only we have to understand that 
