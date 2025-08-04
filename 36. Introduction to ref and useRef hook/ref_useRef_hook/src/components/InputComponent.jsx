import { forwardRef } from "react";
import styles from "../styles/input-component.module.css";


const InputComponent  = forwardRef((props, ref) => {
 const { inputType, inputPlaceholder, value, inputName, onChangeHandler, inputId,  errorText } = props; 
  return (
    <div className={styles.inputWrapper}>
      <input
      id={inputId}
      className={errorText ? styles.errorInput : styles.input}
        type={inputType}
        placeholder={inputPlaceholder}
        value={value}
        name={inputName}
        onChange={onChangeHandler}
        ref = {ref}
      />
       {errorText && <p className={styles.errorText}>{errorText}</p>}
    </div>
  );
}); 

export default InputComponent;
