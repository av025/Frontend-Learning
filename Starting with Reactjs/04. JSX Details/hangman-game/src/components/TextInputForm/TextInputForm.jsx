//! From tommorrow Start with  1:40:00 Timestamp 

import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
const TextInputForm = () => {

    function formSubmitHandler(event) { 
        event.preventDefault();
        console.log("Form Submit")

    }; 

    function handleTextInputChange(event) {
        console.log(event.target.value)
    }
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div>
          <TextInput
            label={"Enter a Word or Phrase here"}
            placeholder={"Enter a Phrase or Word here ..."}
            onChangeHandler={handleTextInputChange}
          />
        </div>
        <div>
            <Button 
            styleType="warning"
            buttonText={"Show/Hide"}/>

            <Button buttonColor="primary" buttonText={"Submit"} buttonType="submit"/>

        </div>
      </form>
    </>
  );
};

export default TextInputForm;
