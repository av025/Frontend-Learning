document.addEventListener("DOMContentLoaded", function handleEvent(){
    const div = document.getElementById("div"); 
    div.addEventListener("click", (e) => {
        console.log("Clicked !!!")
    }); 

    const btn = document.getElementById("button"); 
    btn.addEventListener("click", function eventHandler(event) { 
        event.stopPropagation(); 
        //? This Method event.stopPropagation() was prevent the event bubbling ...... 
        console.log("Button Clicked !!!"); 
    }); 

    /** 
     * In above two event handlers div and btn the event bubbling concept was happening if we add event on the div than the clicked was printed if we attach event handler to button than if we do click on button than  both event handlers logic execution and that become problematic for our execution of code. 
     *! So here in event bubbling our event handlers execution go child to the parent and it create problematic very much.  
     */ 

     let img = document.getElementById("img");
     const btnTwo = document.getElementById("buttonTwo"); 
     let outerDiv = document.getElementById("outer"); 
     
     img.addEventListener("click", function eventHandler(event){
        event.stopPropagation() //? Prevent Event Bubbling 
        
        let toggle = img.getAttribute("data-toggle"); 
        if(toggle === "0") {
            img.src = "https://images.pexels.com/photos/32117661/pexels-photo-32117661.jpeg";
            img.setAttribute("data-toggle", "1");
        }else {
            img.src = "https://images.pexels.com/photos/32796144/pexels-photo-32796144.jpeg";
              img.setAttribute("data-toggle", "0");
        }
    
     
     }) 

     btnTwo.addEventListener("click", () => {
        if(outerDiv.style.display != "none") {
            outerDiv.style.display = "none";
        }else {
            outerDiv.style.display = "block"; 
        }
     }); 

     outerDiv.addEventListener("click", function eventHandler() {
        outerDiv.style.display = "none"; 
     } )
})