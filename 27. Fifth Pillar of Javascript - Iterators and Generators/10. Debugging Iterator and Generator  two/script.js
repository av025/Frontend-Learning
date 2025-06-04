//! Debugging Iterator and Generator Two

function* fetchNextElement() {
    const x = 10; 
    yield 11; 
    console.log("Entering after a yield");
    const y = x + (yield 30);
    console.log("Value of y is ", y); 
}; 


const iterator = fetchNextElement(); 
console.log("first", iterator.next());
console.log("Second", iterator.next()); 
console.log("Third", iterator.next(8));  


//* Let understand how this code execute in call stack 

//? | iterator.next(8) Now it execute again from the previous yield value and we replace the yield|
//? | value from 30 to 7 after the yield second it start resume exceuted                          |
//? |  then :                                                                                     |
//? |  y = 10 + 8    "30 replace from 8" and from here only it start executing again              |
//? | Value of y is 18                                                                            |                                                         
//? | third {value:undefined , done:false}                                                        |
//? |_____________________________________________________________________________________________|
//? | iterator.next();    "Here we execute of function fetchNextElement() upto yield 11 then stop"|
//? |  This fetchNextElement() stop and remove from the call stack because whenever the yield 30  |
//? |  statement comes it pause the execution.                                                    |
//? |_____________________________________________________________________________________________|
//? | iterator.next();    "Here we execute of function fetchNextElement() upto yield 11 then stop"|
//? |  This fetchNextElement() stop and remove from the call stack because whenever the yield     |
//? |  statement comes it pause the execution.                                                    |
//? |                                                                                             |
//? |_____________________________________________________________________________________________|
//? |                                                                                             |
//? |  fetchNextElement() it returns iterator object { }                                          |
//? |_____________________________________________________________________________________________|