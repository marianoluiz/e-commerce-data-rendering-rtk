import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

const SuperCoin = () => {

    const [superCoins, setSuperCoins] = useState(0);

    const cartItems = useSelector(state => state.cart.cartItems);
    /* accesses the state from the store */

    /* reduce is a javascript function that accumulates value  so technically, all item price will be accumulated*/
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

    /* use effect hook to update the state of superCoins */

    /* You’re right that React automatically re-renders the UI when state or props change. However, useEffect is used for handling side effects—operations that are not directly related to rendering but need to be performed in response to state or props changes. */

    useEffect(() => {
        if (totalAmount >= 100 && totalAmount < 200) {
            setSuperCoins(10);
        } else if (totalAmount >= 200 && totalAmount < 300) {
            setSuperCoins(20);
        } else if (totalAmount >= 300) {
            setSuperCoins(30);
        } else {
            setSuperCoins(0);
        }
        }, [totalAmount]);

        /*
         Dependency Array: [totalAmount] specifies that the effect should run whenever totalAmount changes. This means the effect will only execute when totalAmount has a new value, not on every render. 
         */

        /* why use useEffect
        Calculate superCoins whenever totalAmount changes not on every render.

        Ensure that superCoins is updated in sync with changes in totalAmount. */

        return (
            <div className="super-coins" style={{ textAlign: 'center' }}>
              <h2 className="super-coins-title">Super Coins</h2>
              <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
            </div>
          );
}   

export default SuperCoin;