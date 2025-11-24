import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
    reducer: {
        // Add your slice reducers here
        cart: cartReducer,
    }, 
});

export default appStore;