import { createSlice } from '@reduxjs/toolkit';

/* Step 3: Implement Redux logic */
/* Step 4: Actions and reducers creation 

look first below b4 u see this:

name: A string value representing the name of your slice. It's used internally by Redux Toolkit for action type prefixing and other purposes.

initialState: An object representing the initial state of your slice.

reducers: An object containing reducer functions. Each key-value pair represents a single reducer, where the key is the name of the action and the value is the reducer function.

*/

/* Step 5: Reducers creation and export actions */



/* 
This is a redux slice;

Key Components of a Redux Slice
Initial State:

Reducers: Functions that define how the state is updated in response to actions.

Actions: Named actions that correspond to reducers. These are generated automatically by Redux Toolkit.

Slice Object: Contains the state, reducers, and actions, and is created using createSlice from Redux Toolkit. 

*/

/* initial state of slice */
const initialState = {
    cartItems: [],
};

const CartSlice =  createSlice({
 name: 'cart',
 /* initial state of slice */
 initialState,
 /* reducer object */
 reducers: {
    /* reducer function */
    addItemToCart(state, action) {

        /* state parameter here is the initialState or the State of this Slice  */

        /* action creator creates the `action`parameter here which is an object that has type, payload */

        /* item is the single element in the cartitems state. thats just how find() works */
        const existingItem = state.cartItems.find(item => item.id === action.payload.id);

        if(existingItem) {
            existingItem.quantity += 1;
        } else {
            state.cartItems.push({...action.payload, quantity: 1});
        }

        /* 
        action came from dispatch

        example on where action came from

        import { useDispatch } from 'react-redux';

        const dispatch = useDispatch();
        const item = { id: 1, name: 'Apple' };

        dispatch(addItem(product));   // Dispatch the action to add an item to the cart; 
        
        `product` this argument is the payload

        the payload contains the id of the element in this app's context. checkout productList
        
        */


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
        /* payload is from dispatch that is sent to the reducer */
        /* cartItems is the state */
        const itemToIncrease = state.cartItems.find(item => item.id === action.payload);

        if(itemToIncrease) {
            itemToIncrease.quantity += 1;
        }
    },
    decreaseItemQuantity(state, action) {
        const itemToDecrease = state.cartItems.find(item => item.id === action.payload);

        if(itemToDecrease && itemToDecrease.quantity > 1) {
            itemToDecrease.quantity -= 1;
        }
    },
 }
});

/* Action creators are automatically generated by Redux Toolkit’s createSlice function. When you define a slice using createSlice */

/* This line uses object destructuring to extract multiple action creators from CartSlice.actions */
/*

These action creators are functions that return action objects. They are used to dispatch actions to the Redux store, which will then be handled by the reducer to update the state. 
*/


/* This line exports the action creators defined in the CartSlice. These are used in your components or other parts of your application to dispatch actions. */

/* 
action creators are created automatically based on the reducers

the product of the action creator is something like this
{ type: 'cart/addItemToCart', payload: product }

this is sent to the store when u use dispatch
*/


export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity
} = CartSlice.actions;

/* This line exports the reducer function from the slice. This reducer is then used to configure the Redux store. */
export default CartSlice.reducer;