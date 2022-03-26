import { React, useState } from "react";
import "./cartcard.css";

const CartCard = ({
  key,
  id,
  name,
  price,
  image,
  quantity,
  removeFromCart,
  updateCartQuantity,
}) => {
  return (
    <div>
      <div className='mainCartWrapper' key={key}>
        <div className='imageWrapper'>
          <img src={image} alt='product img' />
        </div>
        <div className='cartContendWrapper'>
          <div className='cartContend'>
            <h1>{name}</h1>
            <h3>${price}</h3>
            <button
              className='cartQuantityBtn'
              disabled={Number(quantity) === 1 ? true : ""}
              onClick={() => updateCartQuantity(id, "decrement")}>
              -
            </button>
            {quantity}
            <button
              className='cartQuantityBtn '
              onClick={() => updateCartQuantity(id, "increment")}>
              +
            </button>
          </div>
          <div class='btnWrapperEcom '>
            <button class='btn-cart'>Move to WishList</button>
            <button class='btn-cart' onClick={() => removeFromCart(id)}>
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
