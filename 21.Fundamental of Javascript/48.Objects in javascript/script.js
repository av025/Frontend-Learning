//! Objects in Javascript 
//* Objects are the data structure in javascript which also to store large data or we say other type of data in the form of key-value pair 

//? Let see syntax of our object 
//! We create object with curly braces  
//* {    
//*  We store our value or data in the form of kry-pair value 
//*  <key_name> : <assign_value>,  always separate our key-pair value with comma 
//*  <key_name> : <assign_value>, 
//*  <key_name> : <assign_value>
//* }


//? Let see example of object 
const personInformation = {
    //! Keys are always unique if we give same keys than our old key-value pair was updated if we access that the new one we acces and we only access the value from key not key from value because it was unique identifier 
    fullname:"Aayush Vyas", 
    age: 26,
    // nationality: "Indian",
    nationality: "South african"
}  

console.log(personInformation); 

//* How we can access the value from the object  

//! There are two ways to access first was square brackets in which pass our key as string  and second was dot operator "." 

//* dot operator "." 
console.log(personInformation.fullname); //? Output : Aayush Vyas 
//* square bracket ['key_name' ] 
console.log(personInformation['fullname']);  //? Output : Aayush Vyas 


//! Objects are Mutable ???? 
//* Yes, Objects are Mutable means we can change the real values in it let see example 
personInformation.fullname = "Kratik Vyas";  
//* Access the key and assign the new value to related to that key 

// print personInformation object 
console.log(personInformation);