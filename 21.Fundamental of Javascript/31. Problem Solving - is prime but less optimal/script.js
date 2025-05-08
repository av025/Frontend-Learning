//! Problem Solving - is Prime {  But Less Optimal }

//* Given a number x, write a function to determine whether the number is a prime number or not ? 

function isPrime(x) {

    //* Number is when the prime number when it was multiple of 1 and it's self .  
    for(let number = 2;  number < x;  number++) {
        if(x %  number === 0) {
            return "Not Prime Number"; 
        }

    } 
   //* Return " Prime Number "
    return "Prime Number";
} 


const result = isPrime(11); 
console.log(result);

console.log(isPrime(3));
console.log(isPrime(2));
console.log(isPrime(15));
console.log(isPrime(17));
console.log(isPrime(101));
console.log(isPrime(103));
console.log(isPrime(102)); 