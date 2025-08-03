import styles from "../styles/input-component.module.css";

function InputComponent({ inputType, inputPlaceholder }) {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        className={styles.input}
      />
    </div>
  );
}

export default InputComponent;
