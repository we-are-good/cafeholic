import { Link, Outlet } from 'react-router-dom';
import * as S from '../../styles/aside';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchText } from '../../shared/store/modules/search';
// import { Map, MapMarker } from 'react-kakao-maps-sdk';
const CAFE_GROUP_CODE = 'CE7';

const Aside = () => {
  const dispatch = useDispatch();
  const keyword = useSelector((state) => state.search);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);

  // 검색 버튼을 클릭했을 때 실행되는 함수

  const handleKeywordChange = (e) => {
    dispatch(changeSearchText(e.target.value));
  };

  return (
    <>
      <S.Aside>
        <Link to="/">COFFEEHOLIC</Link>
        <div>
          <form onSubmit={handleSearch}>
            <input type="text" value={keyword} onChange={handleKeywordChange} id="keyword" size="15" />
            <button type="submit" disabled={loading}>
              {loading ? '검색 중...' : '검색'}
            </button>
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
        </div>
      </S.Aside>
      <Outlet />
    </>
  );
};

export default Aside;
