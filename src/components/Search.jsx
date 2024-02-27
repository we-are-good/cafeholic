import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchText, containSearchResults } from '../shared/store/modules/search';
import { useSearchParams } from 'react-router-dom';
import LocationOver from './LocationOver';
import { changeLocation } from '../shared/store/modules/search';

const Search = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  //const [places, setPlaces] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);

  const keyword = searchParams.get('keyword');
  console.log(keyword);

  const location = useSelector((state) => state.search.location);

  const searchText = useSelector((state) => state.search.searchText);

  const searchResults = useSelector((state) => state.search.searchResults);

  const { kakao } = window;

  // useEffect(() => {
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if (!searchText.trim()) {
  //     alert('검색어를 입력해주세요!');
  //     return;
  //   }
  //   setLoading(true);

  //   setSearchParams({ keyword: searchText });

  //   const ps = new kakao.maps.services.Places();

  //   ps.keywordSearch(
  //     searchText,
  //     (data, status) => {
  //       if (status === kakao.maps.services.Status.OK) {
  //         setPlaces(data);
  //         console.log('검색 후 결과 :', data);
  //         //dispatch(containSearchResults([...data]));
  //       } else {
  //         alert('검색 결과가 존재하지 않습니다.');
  //         setPlaces([]);
  //       }
  //     },
  //     { category_group_code: 'CE7' },
  //     { location: new window.kakao.maps.LatLng(location.lat, location.lng), radius: 1000 }
  //   );

  //   setLoading(false);
  // };
  // }, [map, location.lat, location.lng]);

  const handleKeywordChange = (e) => {
    dispatch(changeSearchText(e.target.value));
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchText}
            onChange={handleKeywordChange}
            id="keyword"
            size="15"
            placeholder="검색어를 입력하세요."
          />
          <button type="submit" disabled={loading}>
            {loading ? '검색 중...' : '검색'}
          </button>
        </form>
      </div>
      <div>
        <ul>
          {searchResults.map((place, index) => (
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
      </div>
    </>
  );
};

export default Search;
