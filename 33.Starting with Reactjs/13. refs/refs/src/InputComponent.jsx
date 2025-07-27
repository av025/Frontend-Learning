import { forwardRef } from "react";

const InputComponent = forwardRef((props, ref) => {
  const { inputType, placeholder } = props;
  return <input type={inputType} placeholder={placeholder} ref={ref} />;
});

export default InputComponent; 