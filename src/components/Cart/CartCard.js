import { React, useState } from "react";
import { useDataContex } from "../../contex/data-contex";
import "./cartcard.css";

const CartCard = ({ key, id, name, price, image, removeFromCart }) => {
  const [inputValue, setInputValue] = useState(1);
  const { state, dispatch } = useDataContex();
  console.log("from comp", id);
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
              onClick={() => setInputValue(() => inputValue - 1)}>
              -
            </button>
            {inputValue}
            <button
              className='cartQuantityBtn '
              onClick={() => setInputValue(() => inputValue + 1)}>
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
