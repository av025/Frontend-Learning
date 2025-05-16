//! Revising ToPrimitive Abstract Operation 

//? Revise the ToPrimitive abstract operation 
// Basically this ToPrimitive was abstract operation which to implicit type conversion from one type to another javascript or ecmascript valid type and it perform by javascript itself the developers can't access or perform this ToPrimitive abstract operation. 

//? Syntax of ToPrimithive abstract operation 
//! ToPrimitive[input[,preferred type]] 
//* This ToPrimitive was take two argument first was input argument and second was preferred type which help to choose preferred type when our input argument return multiple type like type-one was number , type-two was string etc.  
//? This ToPrimitive convert the input-argument forcefully into Non-Object type like Primitive type but there was have some cases : 
//* Case One : Primitive type or If the input argument was Non-Object type 
// If the input argument was primitive type than it return directly the input type because already it was non-object type 
//* Case Two : If the input argument was an Object than there was 4 cases applied 
//  - First when the Preferred type was not present than hint variable was default type 
//  - Second when the preferred type was string than hint variable was string type
//  - Third when the preferred type was number than hint variable was number type 
// - Fourth when all the process and type check valid or not check than this default type assign as number type so default cases treated converted into number type. 