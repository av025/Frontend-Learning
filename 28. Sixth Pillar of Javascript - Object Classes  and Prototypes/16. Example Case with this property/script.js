//! Example Case with this property

var object = {
  name: "Person One",
  company: "Google",
  display: () => {
    console.log(this.name, " works in ", this.copmany);
  },
}; 


// object.display();  // Output : undefined works in undefined 
// Explanation:
//* The 'display' method here is defined using an arrow function.
//* Arrow functions do NOT have their own 'this' context.
//* Instead, they inherit 'this' from their lexical (surrounding) scope.

//* Although 'display' is written inside the object,
//* arrow function’s lexical scope is NOT the object itself.
//* Its enclosing scope is the global scope (in case of browser: window object).

//* In the global scope, 'this.name' and 'this.company' are undefined (unless defined globally).
//* Therefore, the output is: undefined works in undefined.  


var objectFirst = {
  name: "Second One",
  company: "Microsoft",
  display: () => {
    setTimeout(() => {
      console.log(this.name, " works in ", this.company);
    },3000);
  },
}; 

// objectFirst.display(); // Output : undefined works in undefined 

// Explanation:

//* 'display' is defined as an arrow function inside the object.
//* Arrow functions do not have their own 'this'; they inherit 'this' from their lexical scope.

//* The lexical scope of 'display' is NOT the object 'objectFirst' — it's the global scope.
//* So, 'this' inside 'display' points to the global object.

//* The arrow function inside setTimeout also inherits 'this' from its outer arrow function 'display'.
//* So both levels of 'this' are pointing to global scope, not to 'objectFirst'.

//* Since there is no 'name' or 'company' defined in the global scope,
//* it logs: undefined works in undefined.


var objectSecond = {
  name: "Third One",
  company: "Phonepe",
  display: function() {
    setTimeout(() => {
      console.log(this.name, " work in ", this.company); 
    }, 6000); 
  }, 
};

objectSecond.display(); // Output : Third One  work in  Phonepe

// Explanation:

//* The 'display' method is a regular function, so 'this' inside it refers to 'objectSecond'.

//* Inside 'display', we are using setTimeout with an arrow function.
//* Arrow functions do not have their own 'this'; they inherit it from the lexical scope.

//* Here, the lexical scope of the arrow function is the 'display' function.
//* And since 'display' is a regular function and was called on 'objectSecond',
//* its 'this' refers to 'objectSecond'.

//* Therefore, the arrow function inside setTimeout successfully accesses 'this.name' and 'this.company'
//* from the outer context, and the correct values are printed.
