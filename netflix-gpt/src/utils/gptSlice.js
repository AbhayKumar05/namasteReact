import { createSlice } from '@reduxjs/toolkit';

const gptsearchSlice = {
    name: 'gptsearch',
    initialState: {
        query: '',
        results: [],
        loading: false,
        error: null,
    },
    reducers: {
        
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        setResults: (state, action) => {
            state.results = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
};

export const { setQuery, setResults, setLoading, setError } = gptsearchSlice.reducers;
export default gptsearchSlice;