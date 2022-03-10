import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./configure-store";

export type PostsState = {
  numberOf: number;
};

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    numberOf: 0,
  } as PostsState,
  reducers: {
    addPost: (state) => {
      state.numberOf += 1;
    },
  },
});

export const { addPost } = postsSlice.actions;

export const numberOfPostsSelector = (state: RootState) => {
  console.log("numberOfPostsSelector firing");
  return state.posts.numberOf;
};

export const rootStateSelector = (state: RootState) => {
  console.log("rootStateSelector firing");
  return state;
};

export default postsSlice.reducer;
