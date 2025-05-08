//! Do While Loop 
//* This "do while loop" was also the loop which helps to do looping in our programming language so with the help we can do repeatetive work. 

//! This in do-while loop was different from while loop and for loop let see the syntax than understand 

//? Syntax of do-while loop  
//?  
//?  Initalize the looping variable 
//? 
//?  do {   
//?       Block of do-while loop -  where we write our code of instruction 
//?       updating looping variable   
//?       
//?  } while( condition of do-while loop)  

//! Here in do-while loop one iteration was default execute because here we perform task than at last we check the condition so if the condition becomes false than also one iteration was perform default. 

//* Let see example of  do-while loop 

//? Case One :  When condition becomes false 

let variableOne = 1;  

do {
    console.log(variableOne); //! Output 1 
    variableOne++;
}while(variableOne > 3);  //* In while loop condition we give condition which was variableOne is greater than 3 which was false condition but "But loop run one time only which was default if the condition becomes false !!!" 


//? Case Two : When condition becomes true 

let variableTwo = 1; 

//* do-while loop 
do {
    console.log(variableTwo);  //! Output was 1 , 2 , 3 , 4 , 5 
    variableTwo++;
}while(variableTwo <= 5);  //* Condition will iterate upto 5 number 