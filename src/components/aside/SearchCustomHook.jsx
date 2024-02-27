function SearchCustomHook() {
  return <div>SearchCustomHook</div>;

  const search = () => {
    setLoading(true);

    if (!keyword.trim()) {
      alert('검색어를 입력해주세요!');
      setLoading(false);
      return;
    }

    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data, status) => {
      console.log('검색 후 카페 검색 결과:', data);

      if (status === window.kakao.maps.services.Status.OK) {
        const bounds = new window.kakao.maps.LatLngBounds();

        const filteredData = data.filter(
          (place) => place.category_group_code === 'CE7' && place.place_name.includes(keyword)
        );
        setPlaces(filteredData);
        console.log('필터링 후 카페 검색 결과:', filteredData);

        const newMarkers = data.map((place, index) => ({
          position: new window.kakao.maps.LatLng(place.y, place.x),
          title: place.place_name,
          id: index
        }));

        for (var i = 0; i < Math.min(15, data.length); i++) {
          newMarkers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x
            },
            content: data[i].place_name
          });
          bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(newMarkers);
        map.setBounds(bounds);
        console.log('검색 시 설정된 마커:', newMarkers);
        dispatch(setSearchResults(filteredData));
      } else {
        alert('검색 결과가 존재하지 않습니다.');
        setPlaces([]);
        setMarkers([]);
      }
      setLoading(false);
    });
  };
  return { keyword, setKeyword, places, loading, search };
}

export default useSearchHook;
