import React, { useState, useEffect, useRef } from "react";
import registerStyle from "../styles/register.module.css";
import InputField from "./InputRegister";
import Heading from "./MainNav";
import { useNavigate } from "react-router-dom";
import axios from "../Axios/axios";

function Register() {
  const firstNameRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("registerData");
    return storedData
      ? JSON.parse(storedData)
      : {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        };
  });

  useEffect(() => {
    localStorage.getItem("registerData", JSON.stringify({ ...data }));
  }, [data]);

  const { firstName, lastName, email, password, confirmPassword } = data;

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  function changeHandler(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleRegister() {
    navigate("/success");
  }

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = true;

    if (firstName.length < 5 || /\d/.test(firstName)) {
      firstNameRef.current.textContent =
        "Username must be at least 5 characters and cannot contain numbers";
      isValid = false;
    } else {
      firstNameRef.current.textContent = "";
    }

    if (password !== confirmPassword) {
      passwordRef.current.textContent = "Passwords do not match";
      isValid = false;
    } else {
      passwordRef.current.textContent = "";
    }
    if (isValid) {
      console.log(data);

      const newData = { ...data, submittedAt: new Date() };
      setData(newData);

      // Store merged data in localStorage
      localStorage.setItem("registerData", JSON.stringify(newData));
      setData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      handleRegister();
    }
    
   
  }

  useEffect(()=> {
    axios.post("/api/user", data);

  },[]);

  return (
    <>
      <Heading />
      <div className={registerStyle.container}>
        <form
          className={registerStyle.form}
          onSubmit={handleSubmit}
          method="POST"
        >
          <h2 className={registerStyle.register}>Register</h2>
          <InputField
            label="First Name:"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={changeHandler}
            inputRef={firstNameRef}
          />
          <InputField
            label="Last Name:"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={changeHandler}
          />
          <InputField
            label="Email:"
            id="email"
            name="email"
            value={email}
            onChange={changeHandler}
            type="email"
          />
          <InputField
            label="Password:"
            id="password"
            name="password"
            value={password}
            onChange={changeHandler}
            type="password"
          />
          <InputField
            label="Confirm Password:"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={changeHandler}
            type="password"
          />
          <h4 ref={firstNameRef} className={registerStyle.value}></h4>
          <h4 ref={passwordRef} className={registerStyle.value}></h4>

          <button type="submit" className={registerStyle.registerButton}>
            submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
