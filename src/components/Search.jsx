import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchText } from '../shared/store/modules/search';
import { useSearchParams } from 'react-router-dom';
import * as S from '../styles/common';
import { connection } from '../shared/store/modules/listConnection';

const Search = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  // const keyword = searchParams.get('keyword');
  // console.log(keyword);

  const searchText = useSelector((state) => state.search.searchText);

  const searchResults = useSelector((state) => state.search.searchResults);

  const { kakao } = window;

  const handleKeywordChange = (e) => {
    dispatch(changeSearchText(e.target.value));
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleClickCard = (place) => {
    // dispatch(
    //   connection({
    //     selectedplace: place
    //   })
    // );

    dispatch(connection(place));
    console.log(place);
  };

  return (
    <>
      <S.SearchDiv>
        <form onSubmit={handleSearch}>
          <S.SearchInput
            type="text"
            value={searchText}
            onChange={handleKeywordChange}
            id="keyword"
            size="15"
            placeholder="검색어를 입력하세요."
          />
          <S.SearchButton type="submit" disabled={loading}>
            {loading ? '검색 중...' : '검색'}
          </S.SearchButton>
        </form>
      </S.SearchDiv>
      <S.ListDiv>
        <S.ListUl>
          {searchResults.map((place, index) => (
            <S.ListLi
              key={index}
              onClick={() => {
                handleClickCard(place);
              }}
            >
              <span className={`markerbg marker_${index + 1}`}></span>
              <S.PlaceDiv className="info">
                <S.PlaceName>{place.place_name}</S.PlaceName>
                {/* 도로명 주소와 지번 주소가 있는 경우 각각 출력합니다. */}
                <S.Placecontents>
                  {place.road_address_name && (
                    <>
                      <S.PlaceNewAddress>{place.road_address_name}</S.PlaceNewAddress>
                      <br />
                      <S.PlaceOldAddress className="jibun gray">{`(${place.address_name})`}</S.PlaceOldAddress>
                    </>
                  )}
                </S.Placecontents>
                {/* 도로명 주소만 있는 경우 출력합니다. */}
                {!place.road_address_name && <span>{place.address_name}</span>}
                {/* 전화번호 출력 */}
                {place.phone ? <S.PlaceTel>{`☎ ${place.phone}`}</S.PlaceTel> : null}
                {/* <S.PlaceTel>{`☎ ${place.phone}`}</S.PlaceTel> */}
              </S.PlaceDiv>
            </S.ListLi>
          ))}
        </S.ListUl>
      </S.ListDiv>
    </>
  );
};

export default Search;
