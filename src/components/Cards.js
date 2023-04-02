import React from "react";
import '../styles/cards.css';

const Cards = (({ item,handleClick }) => {
    const { title, category, price, image } = item;

    return (
        <div className="cards">
            <div className="image_box">
                <img src={image} alt='image' />
            </div>
            <div className="details">
                <p>{title}</p>
                <p>{category}</p>
                <p>Price - {price}Rs</p>
                <button onClick={()=> handleClick(item)}>Add to Cart</button>

            </div>

        </div>
    )
});

export default Cards;