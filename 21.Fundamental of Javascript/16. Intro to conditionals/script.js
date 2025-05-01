//! Intro to Conditionals 
// With the help of conditionals statement we can evaluate the conditions and upto that our programming language make decisions and correspondingly change the actions we want to do. 

//? Let understand with example how programming language will create the decision making on the any condition 

const firstPerson = {
    name:"Aayush Vyas",
    age:26, 
    nationality:"Indian"
} 

const secondPerson = {
    name:"Kratik Vyas",
    age:17,
    nationality:"Indian"
} 


//! Now if we want to create condition that in india only indian people and 18 or above 18 can cast the vote. 

//? For decision making we use conditional statement the basic conditional statement was if statement.

//* firstPerson 
if(firstPerson.nationality === "Indian" && firstPerson.age >= 18) {
    console.log("He was eligible for casting vote")
} 

//*  secondPerson 
if(secondPerson.nationality === "Indian" && secondPerson.age >= 18) {
    console.log("He was eligible for casting vote")
}

