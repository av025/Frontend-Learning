function TextInput({
  inputType = "text",
  label,
  placeholder = "Enter your Input here",
  value,
  onChangeHandler,
}) {
  return (
    <label>
      <span className="text-gray-700">{label}</span>
      <input
        type={inputType}
        className="px-4 py-2 border border-gray-300 rounded-md w-full"
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </label>
  );
}

export default TextInput; 