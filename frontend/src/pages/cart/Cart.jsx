import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";

const Cart = () => {
  const { cartItem, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <>
      {getTotalCartAmount() === 0 ? (
        <div className="empty">
          <h1>Your Cart is Empty 🥺</h1>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      ) : (
        <div className="cart">
          <div className="cart-items">
            <div className="cart-items-title">
              <p>Item</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item, index) => {
              if (cartItem[item._id] > 0) {
                return (
                  <>
                    <div
                      key={index}
                      className="cart-items-title cart-items-item"
                    >
                      <img src={url + "/images/" + item.image} alt="" />
                      <p>{item.name}</p>
                      <p>{item.price}rs</p>
                      <p>{cartItem[item._id]}</p>
                      <p>{item.price * cartItem[item._id]}rs</p>
                      <p
                        onClick={() => removeFromCart(item._id)}
                        className="cross"
                      >
                        X
                      </p>
                    </div>
                    <hr />
                  </>
                );
              }
            })}
          </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Total</h2>
              <div>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>{getTotalCartAmount()}rs</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Delevery Fee</p>
                  <p>{getTotalCartAmount() === 0 ? 0 : 50}rs</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>
                    {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}
                    rs
                  </b>
                </div>
              </div>
              <button onClick={() => navigate("/order")}>
                Proceed to Checkout
              </button>
            </div>
            <div className="cart-promocode">
              <div>
                <p>If you have a promo code, Enter it here</p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder="Promo Code" />
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
