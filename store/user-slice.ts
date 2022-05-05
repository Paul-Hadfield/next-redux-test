import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./configure-store";

export type UserState = {
  id: number;
  name: string;
  likes: number;
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: 1,
    name: "Clark Kent",
    likes: 0,
  } as UserState,
  reducers: {
    addLike: (state) => {
      state.likes += 1;
    },
    toggleName: (state) => {
      state.name = state.name === "Clark Kent" ? "Superman" : "Clark Kent";
    },
  },
});

export const { addLike, toggleName } = userSlice.actions;

export const likesSelector = (state: RootState) => {
  console.log("likesSelector firing");
  return state.user.likes;
};

export const clonedLikesSelector = (state: RootState) => {
  console.log("clonedLikesSelector firing");
  return Object.assign({}, state.user).likes;
};

export const userSelector = (state: RootState) => {
  console.log("userSelector firing");
  return state.user;
};

export const nameSelector = (state: RootState) => {
  console.log("nameSelector firing");
  return state.user.name;
};

export default userSlice.reducer;
