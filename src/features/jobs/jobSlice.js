import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    currentJob: null,
  },
  reducers: {
    setCurrentJob: (state, action) => {
      const { currentJob } = action.payload;
      state.currentJob = currentJob;
    },
  },
  // extraReducers
});

export const {
  setCurrentJob,
} = jobSlice.actions;


export const selectCurrentJob = (state) =>
  state?.job?.currentJob;
export default jobSlice.reducer;