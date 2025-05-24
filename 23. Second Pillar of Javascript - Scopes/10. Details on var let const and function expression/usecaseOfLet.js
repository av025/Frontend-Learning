//! Usecase of let keyword variable 
//* As we know that var keyword variable was giving the function scope 

function fun() {
    for(var i = 1; i < 10; i++) {
        // do some processing here 
    }

    console.log(i);  // Output was 10 
    //! When we create for loop variable with var than we can access it  outside of for-loop body but logical we can access it only inside it so here we use let keyword which was correct variable so it stick this i variable inside the loop body block only. 
}; 

fun(); 


function processing(x , y) {
    if(x > y ) {
        var temp  = x; 
        //! Here also same thing  temp was access this if-block scope also so here we have to use let which was bound with this if scope only. 
        x = y; 
        y = temp; 
    } 

    console.log(x , temp , y)
}; 

processing(10 , 3); 


//? Conclusion : 
//* var keyword : var keyword always create the function scope variable or global scope variable means that we can use anywhere in our js code and similarly in our function scope, In ths var keyword variable we can do re-declaration and re-assignment of value also.... 
//* let keyowrd : In let keyword it create the block-scope and bound with that scope only means it visibility and accesibility was remain to that scope only in let variable we only do re-assignment not re-declaration  