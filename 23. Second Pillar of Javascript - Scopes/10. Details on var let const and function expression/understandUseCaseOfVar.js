//! Understand Usecases of  var keyword
//* We can understand usecase of var with the help of example if let handle things better than var keyword variable because of its block-scope in nature.

//? Underatand with example :

//* example one :
function fun(x) {
  // var i; //* declare the variable i
  let i; //* This condition works best with let keyword variable also as we know that we can access the let keyword variable below the intialization or declaration. 

//! With the let keyword we have to declare the variable in function body than we do conditional re-assigning 
  if (x % 2 === 0) {
    i = 0; //* Here we do re-initialize the i variable according to condition
  } else {
    i = 1; //* Here we do re-initialize the i variable according to condition
  }

  console.log(i); //* Print that variable i
}

fun(8); //? Output : 0
fun(9); //? Output : 1

//* example second :
//? Now we can demonstrate better implementation of above problem
function gun(x) {
  if (x % 2 == 0) {
      //! Here we create the individual variables for scopes which was more cleaner way of our code 
    var i = 0; //* Initialize i variable for this block 
  } else {
    var i = 1; //* Redeclare or intialize variable i for this block 
  }
 console.log(i);
}; 

gun(5);  //? Output : 1 
gun(6); //? Output : 0
