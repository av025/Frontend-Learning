import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({
  inputType,
  formSubmitHandler,
  handleTextInputChange,
  handleShowHideClick,
}) {
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div>
          <TextInput
            inputType={inputType}
            label="Enter a Word or Phrase here"
            placeholder={"Enter a Word or Phrase here...."}
            onChangeHandler={handleTextInputChange}
          />
        </div>
        <div>
          <Button
            styleType="warning"
            buttonText={inputType === "password" ? "Show" : "Hide"}
            onClickHandler={handleShowHideClick}
          />
        </div>
        <div>
          <Button
            styleType="primary"
            buttonText={"Submit"}
            buttonType="submit"
          />
        </div>
      </form>
    </>
  );
}

export default TextInputForm;
