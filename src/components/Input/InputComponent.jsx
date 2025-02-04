// import React from 'react'
// import "./inputComponent.css"

// const InputComponent = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default InputComponent
import React from "react";
import "./inputComponent.css";
const InputComponent = ({
  labelVal,
  height,
  width,
  type,
  value,
  onChange,
  isRequired = false,
  validateUrl = false,
  resize,
  placeholder,
  disabled,
}) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue);

    if (validateUrl) {
      const urlPattern = new RegExp(
        "^(https?:\\/\\/)?([\\w\\-]+\\.)+\\w{2,}(\\/\\S*)?$"
      );
      if (inputValue && !urlPattern.test(inputValue)) {
        setError("Please enter a valid URL.");
      }
    }
  };

  return (
    <form className="form">
      <div className="d-flex flex-column gap-3">
        <label className="form-label">
          {labelVal}
          {isRequired && <span style={{ color: "#e54643" }}>*</span>}
        </label>
        <input
          style={{
            height: height || "38px",
            width: width || "",
            resize: resize || "",
          }}
          as={type === "textarea" ? "textarea" : "input"}
          value={value || ""}
          onChange={handleInputChange}
          disabled={disabled}
          placeholder={placeholder}
          required={isRequired}
        />
      </div>
    </form>
  );
};

export default InputComponent;
