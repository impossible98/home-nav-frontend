// import third-party modules
import { createSlice } from '@reduxjs/toolkit';

export const collapsedSlice = createSlice({
  name: 'collapsed',
  initialState: {
    value: false,
  },
  reducers: {
    toggleCollapsed: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleCollapsed } = collapsedSlice.actions;

export default collapsedSlice.reducer;
