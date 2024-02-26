import { Link, Outlet } from 'react-router-dom';
import * as S from '../../styles/aside';
import { useState } from 'react';
import styled from 'styled-components';
// import { Map, MapMarker } from 'react-kakao-maps-sdk';

const Aside = () => {
  const [keyword, setKeyword] = useState('');
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);

  // 검색 버튼을 클릭했을 때 실행되는 함수
  const handleSearch = (e) => {
    e.preventDefault();
    // 검색어가 비어있는 경우 알림을 표시하고 함수를 종료합니다.
    if (!keyword.trim()) {
      alert('검색어를 입력해주세요!');
      return;
    }
    setLoading(true);

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
        map.setBounds(bounds);
        console.log('검색 시 설정된 마커:', newMarkers);
      } else {
        alert('검색 결과가 존재하지 않습니다.');
        setPlaces([]);
        setMarkers([]);
      }
      setLoading(false);
    });
  };

  return (
    <>
      <S.Aside>
        <Link to="/">COFFEEHOLIC</Link>
        <div>
          <form onSubmit={handleSearch}>
            <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} id="keyword" size="15" />
            <button type="submit" disabled={loading}>
              {loading ? '검색 중...' : '검색'}
            </button>
          </form>
        </div>
        <div>
          <ul>
            {places.map((place, index) => (
              <li key={index}>
                <span className={`markerbg marker_${index + 1}`}></span>
                <div className="info">
                  <h5>{place.place_name}</h5>
                  {/* 도로명 주소와 지번 주소가 있는 경우 각각 출력합니다. */}
                  <p>
                    {place.road_address_name && (
                      <>
                        <span>{place.road_address_name}</span>
                        <br />
                        <span className="jibun gray">{`(${place.address_name})`}</span>
                      </>
                    )}
                  </p>
                  {/* 도로명 주소만 있는 경우 출력합니다. */}
                  {!place.road_address_name && <span>{place.address_name}</span>}
                  {/* 전화번호 출력 */}
                  <span className="tel">{place.phone}</span>
                </div>
              </li>
            ))}
          </ul>
          {/* <Map
            style={{ width: '100%', height: '400px' }}
            center={new window.kakao.maps.LatLng(37.566826, 126.9786567)}
            level={3}
          > */}
          {/* 검색된 장소의 마커를 지도에 표시합니다. */}
          {/* {markers.map((marker) => (
              <MapMarker key={marker.id} position={marker.position} onClick={() => displayInfowindow(marker)} />
            ))}
          </Map> */}
        </div>
      </S.Aside>
      <Outlet />
    </>
  );
};

export default Aside;
