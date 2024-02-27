import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchText: '', // 검색어를 저장할 상태 추가
    searchResults: []
  },
  reducers: {
    changeSearchText: (state, action) => {
      return (state = action.payload);
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload; // 검색 결과 설정
    }
  }
});

export const { changeSearchText, setSearchResults } = searchSlice.actions; //상태 변경시키는 액션 보내주는곳
export default searchSlice.reducer; //리듀서 부분 넘겨주는곳
