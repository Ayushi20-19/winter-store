import React from "react";
import "./cart.css";
import CartCard from "./CartCard";
const Cart = () => {
  return (
    <div>
      <div className='heading-cart'>
        <h1>My Carts</h1>
      </div>
      <section className='cart-main'>
        <div className='productDisplay'>
          <CartCard />
        </div>
        <div className='totalCart'>
          <div className='price-card'>
            <div className='price-card-content'>
              <div className='price-heading'>
                <b>PRICE DETAILS</b>
              </div>
              <div className='pricing'>
                <div className='pricing-item'>
                  <span>Price</span>
                  <span>2342$</span>
                </div>
                <div className='pricing-item'>
                  <span>Discount</span>
                  <span>-40$</span>
                </div>
                <div className='pricing-item'>
                  <span>Delivery Charges</span>
                  <span>10$</span>
                </div>
              </div>
              <div className='total-amout'>
                <span>Total Amount</span>
                <span>4090$</span>
              </div>
              <div className='amount-save'>You will save 40$ in this order</div>
              <button className='btn primary border-radius-0 place-order'>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
