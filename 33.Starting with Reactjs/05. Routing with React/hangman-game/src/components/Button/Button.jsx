import getButtonColor from "./getButtonColor";
function Button({buttonText, onClickHandler, styleType = "primary", buttonType = "button"}) {
    return <button 
    onClick={onClickHandler}
     className={`px-4 py-2 m-2 text-white rounded ${getButtonColor(styleType)} `}
     type={buttonType}
    >
        {buttonText}
    </button>
}

export default Button; 