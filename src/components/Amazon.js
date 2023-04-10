import React from "react";
import list from "../data";
import Cards from "./Cards";
import sectionStyle from '../styles/amazon.module.css';

function Amazon({handleClick}){
    return (
       <section className={sectionStyle.section}>
        {
            list.map((item)=> {
               return ( <Cards item={item} key={item.id} handleClick={handleClick}/>)
            })
        }
       </section>
    )
}

export default Amazon;