import React from 'react';
import { useState } from 'react';

const SearchCustomHook = () => {
  const [keyword, setKeyword] = useState('');
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);

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
        setPlaces(data);

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
        //map.setBounds(bounds);
        console.log('검색 시 설정된 마커:', newMarkers);
      } else {
        alert('검색 결과가 존재하지 않습니다.');
        setPlaces([]);
        setMarkers([]);
      }
      setLoading(false);
    });
  };
  return { keyword, setKeyword, places, loading, search };
};

export default SearchCustomHook;
