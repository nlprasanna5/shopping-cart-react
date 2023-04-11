import React, { useState, useRef } from "react";
import styles from "../styles/login.module.css";
import Heading from "./MainNav";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const refer = useRef(null);

  function handleNavigate(){
    navigate('/home');

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      if (refer.current) {
        refer.current.textContent = "please enter email and password";
      }
    } else {
        handleNavigate();

    }
  };

  const navigate = useNavigate();

  return (
    <>
      <Heading />
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
              <button type="submit">
                Login
              </button>
            </div>
          </div>
          <h3 ref={refer} className={styles.errorMessage}></h3>
          <div className={styles.registerLink}>
            Don't have an account?{" "}
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






































// import React, { useState,useRef } from "react";
// import styles from "../styles/login.module.css";
// // import { Link } from "react-router-dom";
// import Heading from "./MainNav";
// import { useNavigate } from "react-router-dom";

// const LoginForm = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");


//     const refer=useRef();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if(email=='' || password==''){
//             // alert('please enter your email and password');
//             refer.current.textContent="please enter email and password";
//         }
//         // Handle login logic here
//     };
//     const navigate = useNavigate();

//     return (


//         <>
//             <Heading />
//             <div className={styles.loginContainer}>
//                 <form className={styles.loginForm} onSubmit={handleSubmit}>

//                     <h2>Login</h2>
//                     <div className={styles.inputGroup}>
//                         <label>
//                             Email:
//                             <input
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </label>
//                         <label>
//                             Password:
//                             <input
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                             />
//                         </label>
//                         <div className={styles.login}>
//                             <button type="submit" onClick={()=>navigate('/home')} >Login</button>

//                         </div>

//                     </div>
//                     <h3 ref={refer}>{refer.current.textContent}</h3>
//                     <div className={styles.registerLink}>
//                         Don't have an account? <span onClick={() => navigate('/register')} className={styles.reg}>Register</span>
//                     </div>



//                 </form>
//             </div>
//         </>
//     );
// };

// export default LoginForm;
