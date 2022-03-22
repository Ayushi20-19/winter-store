import { React, useState } from "react";
import "./cartcard.css";
const CartCard = () => {
  const [inputValue, setInputValue] = useState(0);

  return (
    <div>
      <div className='mainCartWrapper'>
        <div className='imageWrapper'>
          <img
            src='https://images.unsplash.com/photo-1554568218-ffd1e72a2151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw0NTg1MDAxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
            alt='product img'
          />
        </div>
        <div className='cartContendWrapper'>
          <div className='cartContend'>
            <h1>heading</h1>
            <h3>$345</h3>
            <button
              className='cartQuantityBtn'
              disabled={inputValue === 0 ? true : ""}
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
            <button class='btn-cart'>Remove From Cart</button>
          </div>
        </div>
      </div>
      <div className='mainCartWrapper'>
        <div className='imageWrapper'>
          <img
            src='https://images.unsplash.com/photo-1554568218-ffd1e72a2151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw0NTg1MDAxfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
            alt='product img'
          />
        </div>
        <div className='cartContendWrapper'>
          <div className='cartContend'>
            <h1>heading</h1>
            <h3>$345</h3>

            <button
              className='cartQuantityBtn'
              disabled={inputValue === 0 ? true : ""}
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
            <button class='btn-cart'>Remove From Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
