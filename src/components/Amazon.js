import React from "react";
import list from "../data";
import '../styles/amazon.css';
import Cards from "./Cards";

function Amazon({handleClick}){
    return (
       <section>
        {
            list.map((item)=> {
               return ( <Cards item={item} key={item.id} handleClick={handleClick}/>)
            })
        }
       </section>
    )
}

export default Amazon;