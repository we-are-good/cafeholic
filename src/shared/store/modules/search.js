import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchText: '', // 검색어를 저장할 상태 추가
    searchResults: [],
    location: {
      lat: 37.566826,
      lng: 126.9786567
    }
  },
  reducers: {
    changeSearchText: (state, action) => {
      // return (state = action.payload);
      state.searchText = action.payload;
    },
    containSearchResults: (state, action) => {
      // 검색 결과를 설정
      state.searchResults = action.payload;
    },
    changeLocation: (state, action) => {
      state.location = action.payload;
    }
  }
});

export const { changeSearchText, containSearchResults, changeLocation } = searchSlice.actions; //상태 변경시키는 액션 보내주는곳
export default searchSlice.reducer; //리듀서 부분 넘겨주는곳
