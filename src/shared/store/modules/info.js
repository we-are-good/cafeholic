import { createSlice } from '@reduxjs/toolkit';

const infoList = createSlice({
  name: 'info',
  initialState: {
    info: ''
  },
  reducers: {
    info: (state, action) => {
      return (state = action.payload);
    }
  }
});

export const { info } = infoList.actions;
export default infoList.reducer;
