// import "./button.css"
import getButtonColor from "./getButtonColor";

const Button = ({ buttonText, onClickHandler, styleType = "primary", buttonType = "button" }) => {

  return (
    <button
      onClick={onClickHandler}
      className={`px-4 py-2 mx-4 my-2 text-white rounded ${getButtonColor(styleType)}`}
      type= {buttonType}
    >
      {buttonText}
    </button>
  );
};



export default Button;
