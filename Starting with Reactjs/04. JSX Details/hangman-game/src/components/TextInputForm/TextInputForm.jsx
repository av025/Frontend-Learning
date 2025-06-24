import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
const TextInputForm = ({
  inputType,
  formSubmitHandler,
  handleTextInputChange,
  handleShowHideClick,
}) => {
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div>
          <TextInput
            inputType={inputType}
            label={"Enter a Word or Phrase here"}
            placeholder={"Enter a Phrase or Word here ..."}
            onChangeHandler={handleTextInputChange}
          />
        </div>
        <div>
          <Button
            styleType="warning"
            buttonText={inputType === "password" ? "Show" : "Hide"}
            onClickHandler={handleShowHideClick}
          />

          <Button
            buttonColor="primary"
            buttonText={"Submit"}
            buttonType="submit"
          />
        </div>
      </form>
    </>
  );
};

export default TextInputForm;
