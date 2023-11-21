import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { movieServ } from "../../services/movie.service";

interface MovieState {
  movies: any[];
  selectedMovie: any;
}

export const getAllMovies = createAsyncThunk(
  "/movie/getAllMovies",
  async (tenPhim = "") => {
    const res = await movieServ.getAllMovies(tenPhim);
    return res.data.content;
  },
);

const initialState: MovieState = {
  movies: [],
  selectedMovie: {},
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<any[]>) => {
      state.movies = action.payload;
    },
    setSelectedMovie: (state, action: PayloadAction<any>) => {
      state.selectedMovie = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export const { setSelectedMovie, setMovies } = movieSlice.actions;
export default movieSlice.reducer;
