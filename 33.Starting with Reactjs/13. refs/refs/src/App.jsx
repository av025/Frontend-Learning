import { useEffect, useRef, useState } from "react";
import "./App.css";
import InputComponent from "./InputComponent";

function App() {
  // const [focus, setFocus] = useState(false);
  const [x, setX] = useState(0);

  // function focusOnElement() {
  // setFocus(false)
  // }

  function onIncrementHandler() {
    setX(x + 1);
    console.log(x);
  }

  //! There was more reactive way to access DOM element which was refs means reference so, refs are mutable object, that preserves it's value between re-renders and ref value manually doesn't re-render and we can change the object value manually.

  //? Main usage of this useRef hook was preserve the value between the re-renders so our data was not change through re-renders
  const customRef = useRef(0);

  const inputRef = useRef(null);
  const customInputRef = useRef(null);

  function onHandleClick() {
    document.getElementById("text-name").focus();
    //? Here we access the value from document.getElementById("")
    customRef.current = customRef.current + 1;
    // console.log(customRef);
    inputRef.current = inputRef.current.focus();
  }

  function handleMoreClick() {
    customInputRef.current.focus();
  }

  useEffect(() => {
    console.log("useEffect", customRef, inputRef);
  }, []);

  return (
    <>
      <div style={{ margin: "1rem" }}>
        {/* <input type="text" placeholder="Enter your Name" autoFocus={focus} /> */}
        <input
          type="text"
          placeholder="Enter your Name"
          id="text-name"
          ref={inputRef}
          // Here we give ref prop in which we pass the inputRef
        />
      </div>
      <div style={{ margin: "1rem" }}>
        <InputComponent
          inputType={"text"}
          placeholder="Write Something"
          ref={customInputRef}
        />
      </div>
      <div style={{ margin: "1rem" }}>
        <input type="email" placeholder="Enter your Email" />
      </div>
      <div style={{ margin: "1rem" }}>
        <input type="password" placeholder="Enter your Password" />
      </div>
      <div style={{ margin: "1rem" }}>
        <button onClick={handleMoreClick}>Click the Custom Component</button>
      </div>
      <div style={{ margin: "1rem" }}>
        <button onClick={onHandleClick}>Submit</button>
      </div>
      <button onClick={onIncrementHandler}>Increment</button> {x}
    </>
  );
}

export default App;
