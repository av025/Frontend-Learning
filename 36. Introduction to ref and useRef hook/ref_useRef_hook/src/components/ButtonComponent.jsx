import styles from "../styles/button-component.module.css"

function ButtonComponent({buttonText }) {
    return <button className={styles.button}>{buttonText}</button>
}

export default ButtonComponent; 