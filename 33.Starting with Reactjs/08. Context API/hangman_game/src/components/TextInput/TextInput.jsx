function TextInput({
  label,
  inputType = "text",
  placeholder = "Enter your input here",
  value,
  onChangeHandler,
}) {
  return (
    <label>
      <span className="text-gray-700">{label}</span>
      <input
        className="px-4 py-2 border border-gray-300 rounded-md w-full"
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
      />
    </label>
  );
}

export default TextInput;