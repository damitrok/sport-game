import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserData } from "../utils/dbMethods";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (uid, { rejectWithValue }) => {
    try {
      const data = await getUserData(uid);
      if (!data) {
        throw new Error("Пользователь не найден");
      }
      if (data.createdAt) {
        data.createdAt = new Date(data.createdAt).toISOString();
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userReducer = createSlice({
  name: "user",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    // setUser(state, action) {
    //   state.data = action.payload;
    // },
    // setLoading(state, action) {
    //   state.loading = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setUser, setLoading } = userReducer.actions;
export default userReducer.reducer;
