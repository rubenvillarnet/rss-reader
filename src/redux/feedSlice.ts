import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Feed } from "interfaces/feed";
import { FeedState } from "interfaces/redux";

const initialState: FeedState = {
  channel: null,
  items: null
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    addFeed: (state, action: PayloadAction<Feed>) => {
      state.channel = action.payload.channel;
      state.items = action.payload.items;
    },
    removeFeed: (state) => {
      state.channel = null;
      state.items = null;
    }
  }
});

export const { addFeed, removeFeed } = feedSlice.actions;

export default feedSlice.reducer;
