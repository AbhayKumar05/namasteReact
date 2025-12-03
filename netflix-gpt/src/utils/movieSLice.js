import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovie: null,
    },
    reducers: {
        addMovie: (state, action) => {
            state.nowPlayingMovie = action.payload;
        }
    },
});

export default MovieSlice.reducer;

export const { addMovie } = MovieSlice.actions;
