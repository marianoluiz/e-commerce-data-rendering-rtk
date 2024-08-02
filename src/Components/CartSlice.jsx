import { createSlice } from '@reduxjs/toolkit';


/* Step 3: Implement Redux logic */
/* Step 4: Actions and reducers creation 

name: A string value representing the name of your slice. It's used internally by Redux Toolkit for action type prefixing and other purposes.

initialState: An object representing the initial state of your slice.

reducers: An object containing reducer functions. Each key-value pair represents a single reducer, where the key is the name of the action and the value is the reducer function.

*/

/* Step 5: Reducers creation and export actions */

const initialState = {
    cardItems: [],
};

const CartSlice =  createSlice({
 name: 'cart',
 initialState,
 reducers: {
    addItemToCart(state, action) {
        const existingItem = state.cardItems.find(item.id === action.payload.id);

        if(existingItem) {
            existingItem.quantity += 1;
        } else {
            state.cartItems.push({...action.payload, quantity: 1});
        }
        /* 

        It takes two parameters: state (current state of the slice) and action (the dispatched action containing the payload).

        If the item exists (existingItem is true), it increases the quantity of the existing item in the cart by 1.

        If the item doesn't exist in the cart, it adds the item to the cartItems array with a quantity of 1. */
    },

    removeItemFromCart(state, action) {
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload);

        /* 
            It takes two parameters: state and action.
            It updates the cartItems array by filtering out the item with the ID provided in the action payload. 
        */
    },
    clearCart(state) {
        state.cartItems = [];
    },
    increaseItemQuantity(state, action) {
        const itemToIncrease = state.cartItems.find(item => item.id === action.payload);

        if(itemToIncrease) {
            itemToIncrease += 1;
        }
    },
    decreaseItemQuantity(state, action) {
        const itemToDecrease = state.cartItems.find(item => item.id === action.payload);

        if(itemToDecrease && itemToDecrease > 1) {
            itemToDecrease -= 1;
        }
    },
 }
});

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity
} = CartSlice.actions;
export default CartSlice.reducer;