import { createSlice } from "@reduxjs/toolkit";

const recruiterSlice = createSlice({
  name: "recruiter",
  initialState: {
    currentRecruiter: null,
  },
  reducers: {
    setCurrentRecruiter: (state, action) => {
      const { currentRecruiter } = action.payload;
      state.currentRecruiter = currentRecruiter;
    },
  },
  // extraReducers
});

export const {
  setCurrentRecruiter,
} = recruiterSlice.actions;


export const selectCurrentRecruiter = (state) =>
  state?.recruiter?.currentRecruiter;
export default recruiterSlice.reducer;