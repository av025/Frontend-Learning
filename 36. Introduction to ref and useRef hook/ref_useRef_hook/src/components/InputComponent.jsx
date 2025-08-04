import styles from "../styles/input-component.module.css";

function InputComponent({ inputType, inputPlaceholder, value, inputName, onChangeHandler }) {
  
  return (
    <div className={styles.inputWrapper}>
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        className={styles.input}
        value={value}
        name={inputName}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default InputComponent;
