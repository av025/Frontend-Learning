//! Example of Closures 
//* A closure is a function that accesses variables from its lexical (parent) scope and retains access to those variables even after the outer function has finished executing. These variables remain in memory due to the closure, and are not removed from the environment. 


//* Example of Closures 
function counter(value) { 
  return setInterval(function timer() {
     console.log(value++); 
  }, 2000)
}; 

const intervalID = counter(1);

setTimeout(function stopCounter(){
    clearInterval(intervalID);

},20000)
