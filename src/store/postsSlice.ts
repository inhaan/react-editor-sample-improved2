import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../interfaces";

export type PostsState = Post[];

export type PostWithoutId = Omit<Post, "id">;

const initialState: PostsState = [];

let id = 1;
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<PostWithoutId>) => {
      state.push({ ...action.payload, id: id++ });
    },
  },
});

export const { add } = postsSlice.actions;

export default postsSlice.reducer;
