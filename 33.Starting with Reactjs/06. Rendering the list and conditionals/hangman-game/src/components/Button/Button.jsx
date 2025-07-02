import { getButtonStyle } from "./getButtonStyle";

function Button({
  buttonType = "button",
  buttonStyle = "primary",
  buttonText,
  onClickHandler,
}) {
  return (
    <button
      className={`px-4 py-2 m-2 text-white rounded ${getButtonStyle(
        buttonStyle
      )} `}
      type={buttonType}
      onClick={onClickHandler}
    >
      {buttonText}
    </button>
  );
}

export default Button;
