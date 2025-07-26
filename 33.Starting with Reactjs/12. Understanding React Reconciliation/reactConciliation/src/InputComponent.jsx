import { useState } from "react";

function InputComponent({ type, placeholder }) {
 
 const [ formValue, setFormValue] =  useState(''); 

  return <input type={type} placeholder={placeholder} value={formValue} onChange={(event) => {
    setFormValue(event.target.value); 
  }} />;
}

export default InputComponent;
