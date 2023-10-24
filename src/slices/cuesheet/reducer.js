import { createSlice } from "@reduxjs/toolkit";
import { getCuesheetsApi } from "./thunk";

export const initialState = {
  data: [],
  error: {},
};

const cuesheetSlice = createSlice({
  name: "cuesheet",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getCuesheetsApi.fulfilled, (state, action) => {
      console.log("------cuesheetSlice------");
      console.log("state", state);
      console.log("action", action);
      console.log("payload", action.payload);
      state.getCuesheets = action.payload;
    });

    builder.addCase(getCuesheetsApi.rejected, (state, action) => {
      state.error = action.payload.error || null;
    });
  },
});

export default cuesheetSlice.reducer;
