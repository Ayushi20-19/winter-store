import React from "react";
import "./cart.css";

const PriceCard = ({
  cartQuantity,
  itemPrice,
  discountedPrice,
  totalPrice,
}) => {
  return (
    <div>
      <div className='price-card'>
        <div className='price-card-content'>
          <div className='price-heading'>
            <b>PRICE DETAILS</b>
          </div>
          <div className='pricing'>
            <div className='pricing-item'>
              <span>Price of {cartQuantity} items</span>
              <span>₹{itemPrice}</span>
            </div>
            <div className='pricing-item'>
              <span>Discounted Price</span>
              <span>₹{discountedPrice}</span>
            </div>
            <div className='pricing-item'>
              <span>Delivery Charges</span>
              <span>₹40</span>
            </div>
          </div>
          <div className='total-amout'>
            <span>Total Amount</span>
            <span>₹{totalPrice}</span>
          </div>
          <div className='amount-save'>
            You will save ₹
            {discountedPrice === itemPrice ? 0 : itemPrice - discountedPrice} in
            this order
          </div>
          <button className='btn primary border-radius-0 place-order'>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
