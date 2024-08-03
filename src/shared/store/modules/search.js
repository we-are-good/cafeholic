import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchText: '',
    searchResults: [],
    location: {
      lat: 37.566826,
      lng: 126.9786567
    }
  },
  reducers: {
    changeSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    containSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    changeLocation: (state, action) => {
      state.location = action.payload;
    }
  }
});

export const { changeSearchText, containSearchResults, changeLocation } = searchSlice.actions;
export default searchSlice.reducer;
