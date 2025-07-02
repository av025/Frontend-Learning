document.addEventListener("DOMContentLoaded", function eventHandler() {
  let img = document.getElementById("img");
  const btn = document.getElementById("btn");
  const outerDiv = document.getElementById("outer");

  img.addEventListener("click", function eventHandler(event) {
      // event.stopPropagation();
      let toggle = img.getAttribute("data-toggle");
      if (toggle === "0") {
          img.src = `https://images.pexels.com/photos/32812556/pexels-photo-32812556.jpeg`;
          img.setAttribute("data-toggle", "1");
        } else {
            img.src = `https://images.pexels.com/photos/32117661/pexels-photo-32117661.jpeg`;
            img.setAttribute("data-toggle", "0");
        }
        
        console.log(img.getAttribute("data-toggle"));
  });

  btn.addEventListener("click", function eventHandler(event) {
    if (outerDiv.style.display != "none") {
      outerDiv.style.display = "none";
    } else {
      outerDiv.style.display = "block";
    }
  }); 

  outerDiv.addEventListener("click", function eventHandler(){
    console.log("Bubbling !!!"); 
  })

  outerDiv.addEventListener(
    "click",
    function eventHandler() {
      console.log("Capturing !!!");
      // outerDiv.style.display = "none";
      if (outerDiv.style.padding === "20px") {
        outerDiv.style.padding = "40px";
      } else {
        outerDiv.style.padding = "20px";
      }
    },
    { capture: true }
  );
  //* Here in our eventListner method we pass the third argument which was event-capture argument in which understand another concept and which was Event Capture.

  //? Data Capture
  //* Data capture was the same thing in like event bubbling but here the events prapogate from parent element to child element just opposite to event bubbling. 
}); 


/**
 * 📌 There are 3 phases in JavaScript Event Propagation:
 *
 * 1. Capturing Phase:
 *    - The event travels from the top of the DOM (window) down to the target element.
 *    - Path: window → document → html → body → child... → target
 *
 * 2. Target Phase:
 *    - The event reaches the actual element that triggered the event.
 *
 * 3. Bubbling Phase:
 *    - After reaching the target, the event bubbles up from the target back to the top.
 *    - Path: target → parent → body → html → document → window
 *
 *  Example Flow when clicking an <img>:
 *
 *   Capturing ⬇
 *   Window
 *     |
 *   Document
 *     |
 *    <html>
 *     |
 *    <body>
 *     |
 *    <div>
 *     |
 *    <img>  <-- Target Phase
 *     |
 *   Bubbling ⬆ back up the same path
 *
 *  You can choose to handle the event in either the capturing phase (using {capture: true})
 *     or bubbling phase (default).
 */

