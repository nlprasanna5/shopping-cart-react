import React, { useState } from "react";
import registerStyle from "../styles/register.module.css";
import InputField from "./InputRegister";
import Heading from "./MainNav";
import { useNavigate } from "react-router-dom";
import axios from "../Axios/axios";

function Register() {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const data = details;
    const res = await axios.post("https://shopping-backend-t6jp.onrender.com/api/user", data);
    console.log(res);
  }
  return (
    <>
      <Heading />
      <div className={registerStyle.container}>
        <form
          className={registerStyle.form}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          method="POST"
        >
          <h2 className={registerStyle.register}>Register</h2>
          <InputField
            required
            label="First Name:"
            id="firstName"
            name="firstName"
            onChange={(e) => {
              changeHandler(e);
            }}
          />
          <InputField
            required
            label="Last Name:"
            id="lastName"
            name="lastName"
            onChange={(e) => {
              changeHandler(e);
            }}
          />
          <InputField
            required
            label="Email:"
            id="email"
            name="email"
            onChange={(e) => {
              changeHandler(e);
            }}
            type="email"
          />
          <InputField
            required
            label="Password:"
            id="password"
            name="password"
            onChange={(e) => {
              changeHandler(e);
            }}
            type="password"
          />
          <InputField
            required
            label="Confirm Password:"
            id="confirmPassword"
            name="confirmPassword"
            onChange={(e) => {
              changeHandler(e);
            }}
            type="password"
          />
          <button type="submit" className={registerStyle.registerButton}>
            submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
