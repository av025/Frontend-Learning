//! Prototype Part Two 
//* In previous section of prototype we see that we can achieve inheritance in the classes with the help of extend keyword now how we can achieve inheritance with functions also..... 

//? Call, Bind, Apply Methods in Javascript 
//* With the help of this method call, bind and apply  method we can manipulate the value pointed by the this keyword. 

//* Call Method 
//  With the help of call method in javascript we can change and control the value of this keyword so when the function was execute it point the this value to another callsite and it return the new function always. 

//* Understand with the help of example 
// const myObject = {
    // name: "Aayush Vyas",
    // greet: function(welcomeMessage, prompt) {
        // console.log(`Hello My name is ${this.name}, ${welcomeMessage}, ${prompt} `);
    // }
    //? We know that this greet was arrow function which was resolve by lexical scoping and global object doesnot have any value of this so it becomes undefined.  
// }; 

// myObject.greet("How are you ?", "How can i help you ?");  // Output : Hello My name is Aayush.
//? Above it indicate that the this keyword was refer to myObject as a callsite  


//* Let's point this greet() method of myObject to another callsite with the help of call method 

// const myObjSecond = {
    // name:"Kratik Vyas"
// }; 

// myObject.greet.call(myObjSecond, "How are you ?", "How can i help you ?");   
//* But when we use the call method so it changes the pointer of this keyword and it refer to the myObjSecond and also passed the  multiple argument with comma separate also 
//! Basically this call method have it's own this keyword so the first argument was pass myObjSecond that resolve our this keyword. 

//! Note : Arrow function also resolve lexically only with this call, bind and apply only .....  

//* Apply method 
//  This apply method was also work like the same call method but only difference was instead of n number of argument it takes only two argument first was Callsite object to resolve this keyword and second was n number of argument array  

// myObject.greet.apply(myObjSecond, ["How are you ?", "How can i help you ?"]); 

//! When we don't provide the argument to call and apply method than it was resolve globally means with global scope in nodejs and in browser it was window object. 

//? Interesting Case :-

// var name = "abcd"; 

// let name = "abcd"

// let obj = {
    // name:"xyz",
    // greet: function() {
        // console.log(this.name);
    // }
// }; 

// obj.greet.call();
//* When we don't  pass argument in the call method resolve inbuild this keyword with global scope in the case of browser enviornment abcd was print and in nodejs enviornment undefined output 

//? bind method 
// In this bind method also we can bind our object with function and here this keyword was point towards to the callsite we pass an argument same mechaism like call and apply but here it will not execute immediately instead of return function of it 

// const bindMethod = myObject.greet.bind(myObjSecond); //* It return function 

// bindMethod("How are you ?", "How can i help you ?"); 


//* How to resolve arrow function to use with this call , apply and bind method 

//* We have 4 methods to resolve 
//* 1st. Wrapper of  Regular Function declaration 
// let anotherObj = {
    // anotherName: "xyz",
    // greet: function() {
        // const arrow = () => {
            // console.log(this.anotherName);
        // }; 

        // arrow();
    // }
// }; 


// anotherObj.greet(); 

//* Create variable inside regular function and assign the this keyword 

// let objOne = {
    // self: this, 
    // fun: function() {
    //  const arr = () => {

        //  console.log(this.self);
         //  Here it was refer to the objOne object only. 
        //  }; 

        //  arr();
    // }
// }; 

// objOne.fun();


//? Let see usage of call, apply and bind method  
//* The application was of call, apply and bind method for inheritance without the help of classes 

//? Method One  : Prototypal Inheritance 

// function Event(dateOfEvent) {
//      this.dateOfEvent = dateOfEvent;
// };  

// Event.prototype.bookEvent = function() { 
//     console.log("Booking Event");
// };

// function Movie() {  
//     this.showTime = function() {
//         console.log("Movie Show Time");
//     };
// }; 

// Movie.prototype.__proto__ = Event.prototype;

// const movieShow = new Movie(); 

// movieShow.bookEvent(); 

// function Comedy() {
//      this.showTime = function() {
//         console.log("Movie Show Time");
//     };  
// }; 

// Comedy.prototype.__proto__ = Event.prototype;

// const comdeyShow = new Comedy();

// comdeyShow.bookEvent();

// function Concert() {
    // this.showTime = function() {
        // console.log("Movie Show Time");
    // };  
    
// };

// Concert.prototype.__proto__ = Event.prototype;

// const concertShow = new Concert(); 

// concertShow.bookEvent();

//? Method : Using Object Function 

// function Events(dateOfEvent) {
    // this.dateOfEvent = dateOfEvent;

// }; 


// Events.prototype.bookEvent  = function(date) {
    // console.log("Event Book on ",date);
// }; 


// function Movie(movieName) {
    // this.movieShowTime = function(movieTiming) {
        // console.log(movieName, " Show time",movieTiming);
    // }
// };


//* With the help of Object.create() method we can create the new object with the existing property of prototype of that Object from we create. 

// Movie.prototype = Object.create(Events.prototype); 
//* Here we reassign the Movie.prototype to new Object which have the prototype of Events Object. 


// const movieOne = new Movie("Spiderman Homecoming");

// console.log(movieOne);
// movieOne.movieShowTime("9 pm");
// movieOne.bookEvent("15 July"); 



// class Events {
    // constructor(dateOfEvent) { 
        // this.dateOfEvent = dateOfEvent;

    // };

    // bookEvent() {
        // console.log("Event Book")
    // };
// }; 


// class Movie extends Events {
    // constructor(movieName, movieDate) {
        // super(movieDate); 
        //* with the help of super function we can call the parent constructor in the child constructor to inherit
        // this.movieName = movieName;
    // }
// }; 


// const movieOne = new Movie("Deadpool", "25/05/25"); 
// console.log(movieOne); 



function Events(dateOfEvent) { 
    this.dateOfEvent = dateOfEvent;

}; 


Events.prototype.bookEvent = function() {
    console.log("Event Booked !!!"); 
}; 

function Movie(movieName , movieDate) { 
    this.movieName = movieName; 
    Events.call(this, movieDate);
    //* Here the callsite was this Movie constructor function and also pass the movieDate was represnt the dateOfEvent

}; 


const movieOne = new Movie("Deadpool", "25/05/25"); 
console.log(movieOne);


