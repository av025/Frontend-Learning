//! Switch Case Statement in Programming language 

//* Switch case was also conditional statement also but here we give the expression or value to switch case parenthesis than we matches case in the switch block of code in simple term this switch case was also the conditional statement in which we do case matching with our expression or value which we can pass to switch case parenthesis. 


//? Let see syntax of Switch Case 
//! Switch(condition of switch case)  {
//? Block of Switch Case  
//!  
//!   case one : 
//!       logic or statement of case one 
//!       break statement 
//* This Break keyword was used to stop the execution of our switch case and come out from this block of code if we get desired  output or matching output. 
//!  
//!    case two : 
//!      logic or statement of case two 
//!      break statement 
//!
//!  case three:
//!    logic or statement of case three 
//!    break statement 
//!
//!   default:   
//!     logic or default statement 
//! }



//? Let see example of switch case 
let day = 1;  //* intialize the variable day   

switch(day) {
    case 1 : 
    console.log("Monday"); 
    break;  
    //! We use Break statement for stop the execution of switch statement and comes out of there block 

    case 2: 
    console.log("Tuesday");  
    break; 

    case 3 : 
    console.log("Wednesday"); 
    break; 

    case 4 : 
    console.log("Thursday"); 
    break; 

    case 5 : 
    console.log("Friday"); 
    break; 

    case 6 : 
    console.log("Saturday"); 
    break; 

    default : 
    console.log("Sunday"); 
} 




//! This Switch Case Statement was also the alternate condtional statement we can use if-else statement also to perform this task 

if(day === 1) {
    console.log("Monday"); 
} else if(day === 2) {
    console.log("Tuesday"); 
} else if(day === 3) {
    console.log("Wednesday"); 
}else if(day === 4) {
    console.log("Thursday"); 
}else if(day === 5) {
    console.log("Friday"); 
}else if(day === 6) {
    console.log("Saturday")
}else {
    console.log("Sunday")
} 



//? More example of switch case 

switch(5 - 4) {
    case 1 : 
    console.log("Output was 1"); 
    break; 

    case 2: 
    console.log("Output was 2");
    break; 

    case 3:
        console.log("Output was 3");
        break; 

    default : 
    console.log("Default Case No Output"); 
} 