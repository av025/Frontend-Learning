//! Reject and Resolve Callback :

//* We create promise like this
new Promise(function (resolve, reject) {
  //* In this promise if we call the resolve callback function it was go from pending state to resolve means fullfiled state.
  //* In this reject if we call the reject callback function it was go from resolve state to reject state if the promise was not fullfiled.
  //* If we don't call both function than this promise always in Pending State.
  //? This Promise also have value also which was undefined in the state of Pending than respectively according to resolve state or reject state this value assign to this function argument.
});

//? Here we take two parameter resolve and reject and both are also the callback function....
//? Whenever we implement the executer callback function you call the resolve callback when our promise was fullfiled and we call the reject function whenever our fullfiled state was reject than we call the reject callback and if we don't call both of us than our promise we create that was in remain the pending state that was the default state.
