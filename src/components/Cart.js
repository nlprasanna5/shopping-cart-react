import React, { useEffect, useState } from "react";
import cartStyle from '../styles/cart.module.css';

function Cart({ cart, setCart, handleChange }) {
    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => {
            ans = ans + item.amount * item.price;
        })
        setPrice(ans);
    }

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    }

    useEffect(() => {
        handlePrice();
    })

    return (
        <article>
            {
                cart?.map((item) => {
                    return (
                        <div className={cartStyle.cartBox} key={item.id}>
                            <div className={cartStyle.cartImg}>
                                <img src={item.image} />
                                <p>{item.title}</p>
                            </div>
                            <div>
                                <button onClick={() => handleChange(item, -1)}> - </button>
                                <button>{item.amount}</button>
                                <button onClick={() => handleChange(item, +1)}> + </button>
                            </div>
                            <div>
                                <span>{item.price}</span>
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                            </div>

                        </div>

                    )

                })
            }
            <div className={cartStyle.total}>
                <span>Total Price of your Cart</span>
                <span>Rs - {price.toFixed(2)}</span>
            </div>
        </article>
    )
}

export default Cart;