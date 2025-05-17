//! Demonstrating toString and valueOf method 

//* Let create the object 
const obj = {
    toString() {
        // return "We are learning javascript !!!!"; 
        return 10;
    },
    valueOf() {
        return 290; 
    }

};
console.log(obj.toString()); //? Output : [object object]
//! Here we see that every obj have toString() method default and we can access that method 
//* lets check the type of toString() method 
console.log(typeof obj.toString()); //? Output : string  so it was not array default toString method return [object object]

//* We override the toString method return now let check what toString was returning 
console.log(obj.toString());  //* return "We are learning javascript !!!!"

//* again we override the method toString()
console.log(obj.toString()); //* return 10; 

//! Lets check the valueOf method also 
console.log(obj.valueOf()); //? Output : It returns the same obj object 

//* check the type of valueOf method 
console.log(typeof obj.valueOf()); //? Output : Object

//* Lets override the valueOf method 
console.log(obj.valueOf()); //? Output : It returns 290  

//! This toString and valueOf methods have defaul to all objects in javascript and this toString method return default [object object] which type was string we can override that also and this valueOf was default return that object which was also override 

//! this ToString method return string and valueOf method also return string primitive value.  