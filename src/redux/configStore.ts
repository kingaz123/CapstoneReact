import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import loadingSlice from "./slices/loadingSlice";
import { BookingReducer } from "./BookingReducer/reducer";
import movieSlice from "./slices/movieSlice";
export type RootState = {
  project: string;
  startDay: string;
  user: ReturnType<typeof userSlice>;
  movie: ReturnType<typeof movieSlice>;
  loading: ReturnType<typeof loadingSlice>;
  BookingReducer: ReturnType<typeof BookingReducer>;
};

export const store = configureStore({
  reducer: {
    project: (state: string = "react-movie-project") => {
      return state;
    },
    startDay: (state: string = "Friday, July 7th, 2023") => {
      return state;
    },
    user: userSlice,
    movie: movieSlice,
    loading: loadingSlice,
    BookingReducer: BookingReducer
  },
});

