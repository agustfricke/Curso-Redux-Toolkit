import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', title: 'Aprendiendo Redux Toolkit'},
    {id: '2', title: 'JavaScript'}
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        }
    }
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
