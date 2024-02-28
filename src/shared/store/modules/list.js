import { createSlice } from '@reduxjs/toolkit';

const resultLists = createSlice({
  name: 'list',
  initialState: [],
  reducers: {
    addResults: (state, action) => {
      state = action.payload;
    }
  }
});

export const { addResults } = resultLists.actions;
export default resultLists.reducer;
