import React from "react";
import mainStyle from '../styles/main.module.css';
import Heading from "./MainNav";

function Main(){
    return (
        <>
       <Heading/>

        <section className={mainStyle.messageContainer}>
            <h3 className={mainStyle.message}>Shop your favourite item and fill yourself with full happiness</h3>
        </section>

        </>
    )
}

export default Main;