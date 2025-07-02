document.addEventListener("DOMContentLoaded", function eventHandler(){

    const form = document.getElementById("form");
    
    form.addEventListener("submit", (e) => {
        // In above we attach the formSubmitBtn "submit" 
        console.log(e);
        //* Here we using the event object function which was preventDefault() which stops the default behaviour of element 
        e.preventDefault();
    })

})