import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import movieReducer from "./movieSLice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
    reducer: {
        user: useReducer,
        movie: movieReducer,
        gpt: gptReducer,
    },
});

export default appStore;
