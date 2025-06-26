import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {
  const [inputType, setInputType] = useState("password");
  const [value, setValue] = useState("");
  const [formValue , setFormValue] = useState("")

  const navigate = useNavigate(); //* Return the function this useNavigate() hook

  function formSubmitHandler(event) {
    event.preventDefault();
    if (value) {
      setTimeout(() => {
        navigate("/play",  {state:{word:formValue}}); 
      }, 3000);
    } 


  }

  function handleTextInputChange(event) { 
    const input = event.target.value; 
    setFormValue(input);
    setValue(input.trim() !== ""); 
  }

  function handleShowHideClick() {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  } 
 
  console.log(formValue)

  return (
    <TextInputForm
      inputType={inputType}
      formValue = {formValue}
      formSubmitHandler={formSubmitHandler}
      handleTextInputChange={handleTextInputChange}
      handleShowHideClick={handleShowHideClick}
    />
  );
}

export default TextInputFormContainer;
