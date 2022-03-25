import { React, useState } from "react";
import "./cartcard.css";

const CartCard = ({
  key,
  id,
  name,
  price,
  image,
  removeFromCart,
  updateCartQuantity,
}) => {
  const [inputValue, setInputValue] = useState(1);

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
              disabled={inputValue === 1 ? true : ""}
              onClick={() => (
                setInputValue(() => inputValue - 1),
                updateCartQuantity(id, "decrement")
              )}>
              -
            </button>
            {inputValue}
            <button
              className='cartQuantityBtn '
              onClick={() => (
                setInputValue(() => inputValue + 1),
                updateCartQuantity(id, "increment")
              )}>
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
