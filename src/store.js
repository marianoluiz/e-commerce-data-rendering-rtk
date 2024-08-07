import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './Components/CartSlice';
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

/* 
configureStore: Takes an object with configuration options for the store.

reducer: This key specifies the reducers for different slices of your state. In this case, you are assigning cartReducer to the cart slice of the state. The state will have a key named cart managed by cartReducer.

Structure of the Store:
state.cart will hold the state managed by cartReducer. */

export default store;