//! Add or Remove Key value Pairs in an Object 

//* Understand how we can add key value pair or remove key-value pair in an object with the help of example : 
const personInformation = {
    name:"Aayush Vyas", 
}


//? Let's add the key-value pair in this personInformation object 
personInformation.age = 25; 
//* We add same as we update our existing key-value pair with the help of dot operator 
console.log(personInformation); 

//* Adding another key-value pair property with the help of square brackets "[ ]" 
personInformation["nationality"] = "Indian"; 

console.log(personInformation); 

//* Lets see how we can delete the key-pair value 
//! We can delete the key-value pair with the help of delete keyword which delete our key-value pair of an object 
delete personInformation.nationality;  // Here with the help of delete keyword we delete our nationality key-value pair from our personInformation object. 
console.log(personInformation);