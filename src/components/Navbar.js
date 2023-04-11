import React from 'react';
import navStyle from '../styles/navbar.module.css';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ size, setShow }) => {
    const navigate = useNavigate();
    return (
        <nav>
            <div className={navStyle.navBox}>
                <span className={navStyle.myShop} onClick={() => setShow(true)}>
                    My Shopping
                </span>
                <div className={navStyle.about}>
                    <h3 onClick={()=>navigate('/home')}>Home</h3>
                    <h3>About</h3>
                </div>
                <div className={navStyle.cart} onClick={() => setShow(false)}>
                    <span>
                        <i className='fas fa-cart-plus'></i>
                    </span>
                    <span>{size}</span>

                </div>
                <div className={navStyle.logout}>
                    <h3 onClick={()=>navigate('/')}>Logout</h3>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;