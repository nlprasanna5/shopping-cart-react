import React from 'react';
import navStyle from '../styles/navbar.module.css';

const Navbar =({size,setShow})=> {
    return (
        <nav>
            <div className={navStyle.navBox}>
                <span className={navStyle.myShop} onClick={()=>setShow(true)}>
                    My Shopping
                </span>
                <div className={navStyle.cart} onClick={()=>setShow(false)}>
                   <span>
                    <i className='fas fa-cart-plus'></i>
                   </span>
                   <span>{size}</span>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;