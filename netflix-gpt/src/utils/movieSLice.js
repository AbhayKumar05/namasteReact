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
    addMovieTrailer: (state, action) => {
        state.trailerKey = action.payload;
    }
});

export default MovieSlice.reducer;

export const { addMovie, addMovieTrailer } = MovieSlice.actions;
