import { useState, useEffect } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {
  const [inputType, setInputType] = useState("password");
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function formSubmitHandler(event) {
    event.preventDefault();
    if (value) {
      setTimeout(() => {
        //? Query Params "?"
        // navigate(`/play?text=${value}`);
        //? Path Params "/"
        // navigate(`/play/${value}`)
        //? We are using state object argument in navigate hook
        navigate("/play", { state: { wordSelected: value } });
      }, 3000);
    }
  }

  function handleTextInputChange(event) {
    setValue(event.target.value.trim());
  }

  function handleShowHideClick() {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }

  // useEffect(() => {
  //   console.log("Component first load !!!!!");
  // }, []); 
  //? If we pass empty array dependency than this useEffect was call only once at when component was mount or render.

  // useEffect(() => {
  //   console.log("Component  load and update !!!!");
  // });

  // useEffect(() => {
  //   console.log("Component load and update depened on inputType !!!!");
  // }, [inputType]); 

  //? Here in dependency array if we passed the value inputType than this useEffect callback function depened on this inputType value and call at that time only....

  //* This useEffect Hook help us to control the instructions to be executed during the different lifecycle events of an component.
  //* It takes two arguments as input first was callback function and second was dependency array
  //* useEffect callback function always executed at the time of render and re-render every time if we doing rendering
  //* Now if we want to control which component re-render or not -re-render everytime that we controlled by second argument which we called dependecy array when we pass the empty dependency array than it should not don't do re-render our component and it should be call only the time of render when component was mounted.

  //! useEffect hook only trigger with render or re-render if state object changes or with useState hook, useEffect hook was not triger with normal js variables at that point we have to keep in our mind.

  //? The React Component Lifecycle
  //* 1st. Mounting
  // When the component was first time render or add to the DOM than we called that Phase as Mounting of Component.
  //* 2nd. Updating
  // When we update the state of our react component than re-render process was happen than it was called as Updating of our component and state of our component was done with react useState hook
  //* 3rd. Unmounting
  // When we are removing the component from screen or DOM tree than that phase was come in Unmounting the component.

  return (
    <>
      <TextInputForm
        inputType={inputType}
        formSubmitHandler={formSubmitHandler}
        handleTextInputChange={handleTextInputChange}
        handleShowHideClick={handleShowHideClick}
      />

      {/* {inputType === "text" ? <Temp /> : null}   */}
       {/** In Ternary Operator we pass null value that means we don't want to render any thing on a screen so we used null value.  */}
    </>
  );
}

// function Temp() {
//   useEffect(() => {
//     console.log("Temp Component loaded")
//   })

//   return (
//     <div>
//       <h1>Temp</h1>
//     </div>
//   );
// }

export default TextInputFormContainer;
