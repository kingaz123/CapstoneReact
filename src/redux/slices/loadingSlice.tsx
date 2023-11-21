import { createSlice } from "@reduxjs/toolkit";
interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    set_loading_started: (state) => {
      state.isLoading = true;
    },
    set_loading_ended: (state) => {
      state.isLoading = false;
    },
  },
});

export const { set_loading_started, set_loading_ended } = loadingSlice.actions;

export default loadingSlice.reducer;
