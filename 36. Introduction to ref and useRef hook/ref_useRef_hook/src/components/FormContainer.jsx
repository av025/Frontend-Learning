import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

function FormContainer() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
  }; 

  const validatePassword = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{4}$/;

    const password = formValues.password; 

  return regex.test(password);

    } 
  

  return (
    <form onSubmit={handleFormSubmit}>
      <InputComponent
        inputType={"email"}
        inputPlaceholder={"Please Type Email here "}
        value={formValues.email}
        inputName={"user-email"}
        onChangeHandler={(event) =>
          setFormValues({ ...formValues, email: event.target.value })
        }
      />
      <InputComponent
        inputType={"password"}
        inputPlaceholder={"Please Type Password here"}
        value={formValues.password}
        inputName={"user-email"}
        onChangeHandler={(event) =>
          setFormValues({ ...formValues, password: event.target.value })
        }
      />
      <ButtonComponent buttonText={"Submit Form"} />
    </form>
  );
}

export default FormContainer;
