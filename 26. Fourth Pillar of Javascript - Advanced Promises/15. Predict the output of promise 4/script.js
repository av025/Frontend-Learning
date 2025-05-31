//! Predict the Output of Promise 4

function blocking_for_loop() {
  for (let i = 0; i < 10000000000; i++) {
    // Looping Process
  }
}

console.log("Start of the file");
setTimeout(function timerOne() {
  console.log("Timer One Done ");
}, 0);

blocking_for_loop();

let x = Promise.resolve("Aayush's Promise One");
x.then(function promiseProcess(value) {
  console.log("Who's Promise ??? ", value);
  blocking_for_loop();
});

let y = Promise.resolve("Aayush's Promise Two");
y.then(function promiseProcessSecond(value) {
  console.log("Who's Promise ???? ", value);

  setTimeout(function () {
    console.log("Okk, Done ");
  }, 0);
});

let z = Promise.resolve("Aayush's Promise Third");
z.then(function promiseProcessThird(value) {
  console.log("Who's Promise ????? ", value);
});

setTimeout(function timerTwo() {
  console.log("Timer Two Done");
});

console.log("End of the file"); 

//? Output : 
//* Start of the file 
//*  End of the file 
//* Who's Promise ??? Aayush's Promise One
//* Who's Promise ??? Aayush's Promise Two 
//* Who's Promise ??? Aayush's Promise Third 
//* Timer One Done 
//* Timer Two Done 
//* okk, Done 

//? Explanation of Execution 
//! First All the Global Call-Stack code Execute 
//  The code which was native code of javascript : 
//* Start of the file 
//*  Blocking_for_loop() ----> looping process 
//*  End of the file 
//* Creation of Promise One and its properties are  {value : "Aayush Promise One", promise-state: fullfilment, onFullfilment:[promiseProcess]}
//* Creation of Promise Two and its properties are {value : "Aayush Promise Two", promise-state: fullfilment, onFullFilment:[promiseProcessSecond]}
//* Creation of Promise Three and its properties are {value:"Aayush Promise Three", promise-state:fullfilment, onFullFilment:[promiseProcessThird]}

//! Second we execute all code of Micro-task queue 
//* 1st. This promiseProcess handler was register with the help of .then() promise consume handler and store in our Micro-task queue for future use and there was global code also blocking_for_loop() function so that's why it was global code so this micro-task queue or macro-task queue stop and wait upto this native blocking_for_loop() executed.......... 

//* 2nd. This promiseProcessSecond handler was register with the help of .then() promise consume handler and store in our Micro-task for future use and there was one setTimeout function also which store in Macro-task queue which was also called callback queue 

//* 3rd. This promiseProcessThird handler was register with the help of .then() promise consume handler and store in our Mico-task for future use. 

//* This function was executed after our global call-stack empty and all global code executed than one by one with the help of event-loop this single onFullfilment handler execute that than add another handler to global call stack. 

//! Third we execute all code of Macro-task queue 
//* First Execute setTimeout function of "Timer One Ended"
//* Second Execute setTimeout function of "Timer Two Ended"
//* Third Execute setTimeout function of "okk Done" 

//* Like this all our above js code executed 





