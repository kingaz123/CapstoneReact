import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLocal } from "../../utils/localStore";
import { userServ } from "../../services/user.service";

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  const res = await userServ.getAllUsers();
  return res.data.content;
});

interface UserState {
  userData: string | null;
  users: any[];
  currentUser: any;
}

const initialState: UserState = {
  userData: getLocal("user"),
  users: [],
  currentUser: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<string>) => {
      if (state.userData === "") {
        state.userData = action.payload;
      }
    },
    setCurrentUser: (state, action: PayloadAction<any>) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.users = [
        {
          hoTen: "bao",
          maLoaiNguoiDung: "QuanTri",
        },
      ];
    });
  },
});

export const { setUserData, setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
