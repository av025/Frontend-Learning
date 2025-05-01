//! Else if condition and Nested Conditionals 

//? Else if condition 
//* In programming we have multiple conditions also to make decision for that we have to use else if condition 

//! Syntax of else if 
//* if(inside this parenthesis we write if condition) {
//*       Block of if statement 
//? } else if(inside this parenthesis we write our another condition) { 
//?  Block of if else statement 
//? } 
//* else {
//*   Else block 
//* } 


//? Let see example of else-if statement 
//* condition one
let isUserPremium = false;
let isUserVIP = true;

//* condition two 
isUserPremium = true;
isUserVIP = false; 

//* condition three 
isUserPremium = false;
isUserVIP = false;


if(isUserPremium) {
    console.log("Enjoy the premium content on the hotstar") //* this statement execute for condition two
} else if(isUserVIP) {
    console.log("Enjoy the VIP Content on hotstar, For more please subscribe the Premium subscription"); //* this statement execute for condition one
} else {
    console.log("To enjoy please subscribe or puchase the Premium or VIP Content of Hotstar") //* this statement execute for condition three 
} 

//! Edge Case :  When there was multiple condition was true than only first condition was executed let see example of it 

let personAge = 19;
const personNationality = "Indian"; 

if(personAge >= 18) {
    console.log("He/She can give vote if the age was equal to 18 or greater than 18"); 
    //! In the flow of if-else-if-else only first true statement was excuted !!!! 
}else if(personNationality === "Indian") {
    console.log("He/She can give vote if it has nationality of india");
}else {
    console.log("He/She can't give a vote");
} 


//! Nested If Else 
//* When we create conditionals statement like if-else inside the conditional statement if-else than it was called Nested If Else let understand with the example nested if-else 


//* condition one 
let ifUserPurchasePremium = true; 
let premiumServicesPurchased = true; 

//* condition two 
premiumServicesPurchased = false;  

//* condition three 
ifUserPurchasePremium = false;
premiumServicesPurchased = false; 

//* condition four create more option 
ifUserPurchasePremium= true;
premiumServicesPurchased = true;
let disneyPlusWithPremium = true;

if(ifUserPurchasePremium) { 
    if(ifUserPurchasePremium && premiumServicesPurchased && disneyPlusWithPremium) { 
        console.log("User got more Services and Disney + subscription with Premium account"); 
        //* this statement was executed for condition four


    } else if(premiumServicesPurchased) {
        console.log("User got more Services with Premium Account"); //* this statement was executed for condition one
    }else if(disneyPlusWithPremium) {
        console.log("User have Disney + subscription with Premium Account")
        //* this statement was execute when only have disney + subs. not premium services
    } else {
        console.log("User have Premium Account "); //* this statement was executed for condition two 

    }
    
}else {
    console.log("For more content please purchase Premium Services !!!"); //* this statement was executed for condition three
}