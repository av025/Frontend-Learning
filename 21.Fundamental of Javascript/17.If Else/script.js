//! If Else Statement 
//* With the help of If and Else Statement we can create the decision making for our conditional situation in our program. 

//? Syntax of if-else statement
//* if( condition of if statement )  { 
//*         Block of If Statement or Scope of If Statement
//* } else {
//*    
//*     Block of else Statement or Scope of else statement   
//* } 
//! Here the if statement was Primary or we say mandatory and else statement was secondary statement, the condition of if statement become false than only else statement execute otherwise if only exceute. 

//* Let see example  
if(true) {
    console.log("If the if-condition becomes true than only this statement was excuted")
} 

//* Example Two 
if("") {
    console.log("If the if-condition becomes true than only this statement was executed ")
}else {
    console.log("If the condition of if-statement becomes false than only this else statement we execute. ")
} 


//* Example Three 
console.log("Welcome to Prime Video"); 
let primeSubscription = true;

//* re-assign the primeSubscription value 
primeSubscription = false;


if(primeSubscription) {
    console.log("Enjoy the content");
}else {
    console.log("Please Subscribe first than enjoy the content");
} 

//! Here if block exist without the else block but else block was dependent on if block when the if-condition block becomes false than only else excuted so else was not exist without if-block