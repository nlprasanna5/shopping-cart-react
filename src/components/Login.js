import React, { useState } from "react";
import styles from "../styles/login.module.css";
import Heading from "./MainNav";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [details, setDetails] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    const data = details;
    const res = await axios.get("api/user", {
      params: { email: data.email, password: data.password },
    });
    console.log(res);
  };
  return (
    <>
      <Heading />
      <div className={styles.loginContainer}>
        <form
          className={styles.loginForm}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h2>Login</h2>
          <div className={styles.inputGroup}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                onChange={(e) => {
                  setDetails({ ...details, [e.target.name]: e.target.value });
                }}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                onChange={(e) => {
                  setDetails({ ...details, [e.target.name]: e.target.value });
                }}
              />
            </label>
            <div className={styles.login}>
              <button type="submit">Login</button>
            </div>
          </div>
          <div className={styles.registerLink}>
            Don't have an account?
            <span onClick={() => navigate("/register")} className={styles.reg}>
              Register
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;

//
//  onClick={() => navigate("/home")}
