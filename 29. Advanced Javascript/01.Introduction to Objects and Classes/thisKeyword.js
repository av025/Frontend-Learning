//! this keyword in javascript 
//* --> Simlarly like new keyword,  this keyword in javascript was very different from other languages as we look to other programming language this keyword.
//* --> this keyword is available to be accessed use in function or outside of the function and we can use even in the classes of javascript also. 
//* --> If we use this keyword anywhere than what the value stored inside it ? 

//! In most of cases the "this" keyword always refer to "Call site" from where we call the this keyword 
//* Callsite may refer to the object or a position in our code or may be even a new keyword. It refers to the entity of which is calling this keyword.  

//* Let understand with example : 
const object = {
    x:10,
    y:20,
    func: function() {
        console.log(this.x, this.y); 
        //* Inside this function we use this keyword 
    },
    z: {
        x:99,
        func: function() {
            console.log(this.x, this.y) ;
            //* using again this keyword in this new object function func
        },
    },
    fun: () => {
        console.log(this.x , this.y);
    }
}; 


//* As we understand that "this" keyword was refer to the callsite from where it was call, 
//  Now lets call the func 
object.func();  // Output : 10 20 
//? Can we say this keyword call from the object so it refers to the Object we created  

object.z.func() // Output : 10 , undefined 
//? Here this keyword refer to z object because func was call with the help of z object 

//! This "this" keyword have the exception also : 
//* We can not use the callsite if we use this keyword inside the arrow function or fat arrow function 
object.fun(); //* Output : undefined undefined 
//? In arrow function "this" keyword was resolve by the lexical scoping means it start resolving by finding the value at upper level of scope or we say in parent scope than not found than that scope parent scope upto global scope  

//! So in arrow function "this" keyword was resolve by lexical scoping. 

// first let console in global scope "this" keyword 
console.log(this); //* In node js run enviornment it was empty object similarly in browser enviornment it was window object. 

//* let see the example of this keyword resolve in arrow function 

const myObject = {
    a:1, 
    b:2,
    c:3 ,
    func: function() { 

        const arrow = () => {
            console.log(this.a , this.b , this.c); 
            //! In  arrow function was resolve with lexical enviornment so here it will look one upper-level scope which was func and that was the part of myObject so here that's why this keyword refer to myObject properties a , b and c 
        }; 

        arrow();

    },
}; 


//* Let's call the value with the help of this keyword 

myObject.func(); // Output : 1 2 3 
//* Here the lexical scoping was upto from where the this keyword call upto here it lexical scope  so it goes one scope up which was func function and there this  keyword refer to myObject  

//* Case :  What was output in this case 
const myObjectSecond = {
    x:25,
    y:25,
    z: function() {
        const regularExpression = function() {
            
            const arrow = () => {
                console.log(this.x , this.y);  
                //! Here the  this keyword value was undefined of both  because as we know that in arrow function our this keyword was resolve with lexical scoping but here this arrow function was nested  inside two function wrapper.   So when we call this function regularExpression function this value become empty object in nodejs and window object in browser and the problem of callsite here 
                  
            };

            arrow(); 
            //! Here we call the function without Callsite so it's value become global object in nodejs and window object in browser 
        };

        regularExpression();
        //! Here we call the function without Callsite so it's value become global object in nodejs and window object in browser 
    }
}; 


myObjectSecond.z(); //* Here Output was undefined undefined 




//? So we have to understand that whenever we create object with the help of new keyword it create the new plain and empty object than call the constructor function in which this keyword have the access to the new object we create with new keyword than "this" keyword refers to the plain new object and add the all the implementation of constructor function on that new object. 





