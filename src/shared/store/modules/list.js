import { createSlice } from '@reduxjs/toolkit';

const resultLists = createSlice({
  name: 'list',
  initialState: [],
  reducers: {
    addResults: (state, action) => {
      console.log('action.payload', action.payload);
      state = action.payload;
    }
  }
});

export const { addResults } = resultLists.actions;
export default resultLists.reducer;
