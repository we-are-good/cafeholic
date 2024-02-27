export const getmaptotalcafe = async () => {
  const ps = new window.kakao.maps.services.Places();
  ps.keywordSearch('카페', (data, status) => {
    if (status === window.kakao.maps.services.Status.OK) {
      return data;
    }
    return new Error('카페 검색 에러');
  });
};



