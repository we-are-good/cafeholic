import { createSlice } from '@reduxjs/toolkit';

const connectionList = createSlice({
  name: 'connection',
  initialState: {
    selectedplace: ''
  },
  reducers: {
    connection: (state, action) => {
      return (state = action.payload);
    }
  }
});

export const { connection } = connectionList.actions;
export default connectionList.reducer;
