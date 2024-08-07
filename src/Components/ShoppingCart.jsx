import React from 'react';
import './ShoppingCart.css'; 
import { useDispatch, useSelector } from 'react-redux';

/* Step 8: Display products in shopping cart */
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice'; // Assuming you have action creators for increasing and decreasing item quantity


const ShoppingCart = () => {

    const dispatch = useDispatch();
    /*
    dispatch: This function is used to send actions to the Redux store to update the state.
    */
    
    /* useSelector is a hook provided by react-redux that allows you to access the Redux store's state from within a functional React component.  */

    const cartItems = useSelector(state => state.cart.cartItems);


    /* reduce is a javascript function that accumulates value so technically, all prices times qty would be accumulated */
    
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    /* cartItems.reduce: This method iterates over the cartItems array to calculate a single value, in this case, the total amount. */

  /* 0: The initial value of the accumulator (total). */

  /* these are action objects from CartSlice */
    const handleRemoveItem = itemId => {
    dispatch(removeItemFromCart(itemId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleIncreaseQuantity = itemId => {
        dispatch(increaseItemQuantity(itemId));
    };

    const handleDecreaseQuantity = itemId => {
        dispatch(decreaseItemQuantity(itemId));
    };
  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map(item => (
            <li key={item.id} className="cart-item">
                <span>{item.name} - ${item.price} </span>

                <div className="quantity-controls">

                    {/* minus */}
                    <button className='quantity-control-btn' onClick={() => handleDecreaseQuantity(item.id)}>-</button>

                    {/* amount */}
                    <span> {item.quantity}</span>
                    
                    {/* add */}
                    <button className="quantity-control-btn" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                </div>

                <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
        ))}
      </ul>
      <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
      
      <div>{totalAmount ? <div>'The total amount is {totalAmount}</div> : ''}</div>

    </div>
  
    </>
  );
};

export default ShoppingCart;
