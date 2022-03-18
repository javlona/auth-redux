import React from "react";

function Input(props) {
    const {name, value, type, label, placeholder, onChange, error} = props
  return (
    <div>
      <label className="input__label" htmlFor={name}>
        {label}
      </label>
      <input
        className="input"
        onChange={onChange}
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
      />
      {error && <div className="input__error">{error}</div>}
    </div>
  );
}

export default Input;
