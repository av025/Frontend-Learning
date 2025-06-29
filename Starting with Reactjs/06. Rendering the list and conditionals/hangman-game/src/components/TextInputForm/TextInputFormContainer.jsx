import { useState } from "react";
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
        navigate("/play", { state:{wordSelected: value }});
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
