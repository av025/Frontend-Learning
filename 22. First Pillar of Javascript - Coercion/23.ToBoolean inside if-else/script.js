//! ToBoolean inside if-else 
//* Let see how we perform ToBoolean abstract operation inside if-else conditional statement 

//? When we pass the condition to if conditional statement and the condition we are passing becomes true than only if-block was excuted where our Operand do coercion and it becomes true or the condition becomes false than else block executed which was secondary block and if was primary block let see example of it 


//* Case One 
if("") {
    console.log("If Block Statement was executed !!!!");
}else {
    console.log("Else block Statement was executed !!!!"); //! This else block executed 
} 


//* Case Two 
if("Aayush") {
    console.log("If Block Statement was executed !!!!");  //! This if block executed 
}else {
    console.log("Else block Statement was executed !!!!"); 
} 