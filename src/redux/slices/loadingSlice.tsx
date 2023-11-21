import { createSlice } from "@reduxjs/toolkit";

// Define the type for the state
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
    // If you have payload, use PayloadAction<TypeOfPayload> to type it
    // exampleAction: (state, action: PayloadAction<string>) => {
    //   // Do something with action.payload
    // },
  },
});

export const { set_loading_started, set_loading_ended } = loadingSlice.actions;

export default loadingSlice.reducer;
