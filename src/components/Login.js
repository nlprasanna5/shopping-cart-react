import React, { useState } from "react";
import styles from "../styles/login.module.css";
// import { Link } from "react-router-dom";
import Heading from "./MainNav";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };
  const navigate=useNavigate();

  return (

    
    <>
    <Heading/>
    <div className={styles.loginContainer}>
    <form className={styles.loginForm} onSubmit={handleSubmit}>
        
        <h2>Login</h2>
      <div className={styles.inputGroup}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className={styles.login}>
        <button type="submit" >Login</button>

        </div>
       
      </div>
      <div className={styles.registerLink}>
        Don't have an account? <span onClick={()=>navigate('/register')}>Register</span> 
      </div>

      
     
    </form>
    </div>
    </>
  );
};

export default LoginForm;
