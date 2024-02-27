import { Link, Outlet } from 'react-router-dom';
import * as S from '../../styles/aside';
import useSearchHook from './SearchCustomHook';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchText } from '../../shared/store/modules/search';

import { Map, MapMarker } from 'react-kakao-maps-sdk';

const Aside = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.searchResults);
  const { keyword, setKeyword, places, search } = useSearchHook(); // 커스텀 훅 사용

  // 검색 버튼을 클릭했을 때 실행되는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeSearchText(keyword)); // 검색어를 전역 상태로 업데이트
    search(); //
  };

  return (
    <>
      <S.Aside>
        <Link to="/">COFFEEHOLIC</Link>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} id="keyword" size="15" />
            <button type="submit">검색</button>
          </form>
        </div>
        <div>
          <ul>
            {places.map((places, index) => (
              <li key={index}>
                <span className={`markerbg marker_${index + 1}`}></span>
                <div className="info">
                  <h5>{places.place_name}</h5>
                  {/* 도로명 주소와 지번 주소가 있는 경우 각각 출력합니다. */}
                  <p>
                    {places.road_address_name && (
                      <>
                        <span>{places.road_address_name}</span>
                        <br />
                        <span className="jibun gray">{`(${places.address_name})`}</span>
                      </>
                    )}
                  </p>
                  {/* 도로명 주소만 있는 경우 출력합니다. */}
                  {!places.road_address_name && <span>{places.address_name}</span>}
                  {/* 전화번호 출력 */}
                  <span className="tel">{places.phone}</span>
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
          {/* {places.map((marker) => (
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
