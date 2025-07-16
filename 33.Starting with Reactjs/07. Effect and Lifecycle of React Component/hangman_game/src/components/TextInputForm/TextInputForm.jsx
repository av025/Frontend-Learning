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
        <TextInput
          inputType={inputType}
          label="Enter a Word or Phrase here"
          placeholder={"Enter a Word or Phrase here...."}
          onChangeHandler={handleTextInputChange}
        />
        <div>
          <Button
            buttonStyle="warning"
            buttonText={inputType === "password" ? "Show" : "Hide"}
            onClickHandler={handleShowHideClick}
          />

          <Button
            buttonStyle="primary"
            buttonText={"Submit"}
            buttonType="submit"
          />
        </div>
      </form>
    </>
  );
}

export default TextInputForm;