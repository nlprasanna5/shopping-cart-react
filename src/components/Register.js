import React, { useState, useEffect, useRef } from "react";
import registerStyle from "../styles/register.module.css";
import InputField from "./InputRegister";
import Heading from "./MainNav";
import { useNavigate } from "react-router-dom";

function Register() {
  const firstNameRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate=useNavigate();

  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("registerData");
    return storedData ? JSON.parse(storedData) : {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  });

  useEffect(() => {
    localStorage.setItem("registerData", JSON.stringify(data));
  }, [data]);
  
  // const [data, setData] = useState({
  //   firstName:'',
  //   lastName:'',
  //   email:'',
  //   password:'',
  //   confirmPassword:'',
  // });

  const { firstName, lastName, email, password, confirmPassword } = data;

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  

  function changeHandler(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleRegister(){
    navigate('/success');
  }

  
  function handleSubmit(e) {
    e.preventDefault();
    let isValid = true;
    
    if (firstName && firstName.length <= 5 || !isNaN(firstName ||firstName=='')) {
      firstNameRef.current.textContent = 'Username must be at least 5 characters and numbers are not allowed';
      
      isValid = false;
    } else {
      firstNameRef.current.textContent = '';
    }
    
    if (password && password !== confirmPassword || password=='') {
      passwordRef.current.textContent = 'Passwords not matched.';
      setData({
        password: '',
        confirmPassword: '',
      });
      isValid = false;
    } else {
      passwordRef.current.textContent = '';
    }
    
    if (isValid) {
      console.log(data);
      setData({
        firstName: '',
        lastName:'',
        email: '',
        password: '',
        confirmPassword: '',
      });

      handleRegister();

    }
  }

  return (
    <>
      <Heading/>
      <div className={registerStyle.container}>
        <form className={registerStyle.form} onSubmit={handleSubmit}>
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
          
          <button type="submit" className={registerStyle.registerButton} >submit</button>
        </form>
      </div>
    </>
  );
}

export default Register;






// useEffect(() => {
  //   const storedData = localStorage.getItem('formData');
  //   if (storedData) {
  //     const parsedData = JSON.parse(storedData);
  //     setData(parsedData);
  //   }
  // }, []);

  
  







































