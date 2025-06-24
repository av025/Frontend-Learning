import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {
const [inputType , setInputType] = useState("password")

  function formSubmitHandler(event) {
    event.preventDefault();
    console.log("Form Submit");
  }

  function handleTextInputChange(event) {
    console.log(event.target.value);
  }

  function handleShowHideClick() {
    if (inputType === "password") {
      setInputType("text")
    } else {
      setInputType("password");
    }
  }

  return (
    <TextInputForm
      inputType={inputType}
      formSubmitHandler={formSubmitHandler}
      handleTextInputChange={handleTextInputChange}
      handleShowHideClick={handleShowHideClick}
    />
  );
}

export default TextInputFormContainer;
