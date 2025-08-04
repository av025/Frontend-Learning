import { useRef, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import passwordValidator from "../helper/passwordValidator";
import emailValidator from "../helper/emailValidator";

function FormContainer() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmailRef = useRef(null);
  const validatePasswordRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    validatePassword();
    validateEmail();
  };

  const validatePassword = () => {
    const password = formValues.password;

    if (!passwordValidator(password)) {
      validatePasswordRef.current = validatePasswordRef.current.focus();
      setPasswordError("Please enter a strong password !!!");
    } else {
      setPasswordError("");
    }
  };

  const validateEmail = () => {
    const email = formValues.email;

    if (!emailValidator(email)) {
      validateEmailRef.current = validateEmailRef.current.focus();
      setEmailError("Please enter a valid email !!!");
    } else {
      setEmailError("");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <InputComponent
        inputId="email-input"
        inputType={"email"}
        inputPlaceholder={"Please Type Email here "}
        value={formValues.email}
        inputName={"user-email"}
        onChangeHandler={(event) =>
          setFormValues({ ...formValues, email: event.target.value })
        }
        ref={validateEmailRef}
        errorText={emailError}
      />
      <InputComponent
        inputId="password-input"
        inputType={"password"}
        inputPlaceholder={"Please Type Password here"}
        value={formValues.password}
        inputName={"user-email"}
        onChangeHandler={(event) =>
          setFormValues({ ...formValues, password: event.target.value })
        }
        ref={validatePasswordRef}
        errorText={passwordError}
      />
      <ButtonComponent buttonText={"Submit Form"} />
    </form>
  );
}

export default FormContainer;
