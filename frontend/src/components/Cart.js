import React from 'react';
import { Link } from 'react-router-dom';
import './css/Cart.css'; // Create this CSS file for styling

const Cart = ({ cart }) => {
    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="cart-items-list">
                    {cart.map((item, index) => (
                        <li key={index} className="cart-item">
                            <img src={item.src} alt={`Cart item ${index}`} className="cart-item-image" />
                            <div className="cart-item-info">
                                <p>{item.description}</p>
                                <p className="cart-item-price">{item.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
        </div>
    );
};

export default Cart;
