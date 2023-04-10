import React from "react";
import cardStyle from '../styles/cards.module.css';

const Cards = (({ item,handleClick }) => {
    const { title, category, price, image } = item;

    return (
        <div className={cardStyle.cards}>
            <div className={cardStyle.imageBox}>
                <img src={image} alt='image' />
            </div>
            <div className={cardStyle.details}>
                <p>{title}</p>
                <p>{category}</p>
                <p>Price - {price}Rs</p>
                <button onClick={()=> handleClick(item)}>Add to Cart</button>

            </div>

        </div>
    )
});

export default Cards;