import React from "react";
// import './registerStyle.css';
import inputRegister from '../styles/register.module.css'

function InputField({ label, id, name, value, onChange, inputRef, type = "text" }) {
  return (
    <div className={inputRegister.formGroup}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        ref={inputRef} className={inputRegister.content}
      />
    </div>
  );
}

export default InputField;
