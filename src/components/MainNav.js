import React from "react";
import mainStyle from '../styles/main.module.css';
// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";




const Heading =()=> {
    const navigate=useNavigate();

   
   
    return (
        <>
        <nav>
        <div className={mainStyle.mainContainer}>
            <div className={mainStyle.name}>
                <h3 onClick={()=>navigate('/')}>My Shopping</h3>
            </div>
            <div className={mainStyle.login}>
            <p className={mainStyle.log} style={{color:'white'}} onClick={()=>navigate('/login')}> Login </p>
            </div>
        </div>
    </nav>
    </>

    )


}

export default Heading;

