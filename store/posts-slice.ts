import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./configure-store";
export interface Post {
  id: number | string;
  userId: number;
  title: string;
  likes: number;
}

export type PostsState = {
  posts: Array<Post>;
};

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      { id: 1, userId: 1, title: "Who is Superman?", likes: 2 },
      { id: 2, userId: 2, title: "Always quote the author", likes: 5 },
      { id: 3, userId: 2, title: "Rememberable quotes", likes: 0 },
      { id: 4, userId: 1, title: "Phoneboxes of New York city", likes: 1 },
    ],
  } as PostsState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },

    addLike: (state, action: PayloadAction<number | string>) => {
      const post = state.posts.find((post) => post.id === action.payload);
      if (post) {
        post.likes++;
      }
    },
  },
});

export const { addPost, addLike } = postsSlice.actions;

export const numberOfPostsSelector = (state: RootState) => {
  console.log("numberOfPostsSelector firing");
  return state.posts.posts.length;
};

export const rootStateSelector = (state: RootState) => {
  console.log("rootStateSelector firing");
  return state;
};

export default postsSlice.reducer;
