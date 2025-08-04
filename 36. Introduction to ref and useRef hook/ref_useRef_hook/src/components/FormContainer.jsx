import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import passwordValidator from "../helper/passwordValidator";
import emailValidator from "../helper/emailValidator";

function FormContainer() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    validatePassword()
    validateEmail()
  };

  const validatePassword = () => {
    const password = formValues.password;

    if (!passwordValidator(password)) {
      console.log("Password doesn't contain required params !!!");
    }
  }; 


  const validateEmail = () => {
    const email = formValues.email; 

    if(!emailValidator(email)) {
        console.log("Email doesn't contain required params !!!"); 
    }
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
