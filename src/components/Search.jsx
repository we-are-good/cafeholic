import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchText } from '../shared/store/modules/search';
import * as S from '../styles/common';
import { connection } from '../shared/store/modules/listConnection';
import { info } from '../shared/store/modules/info';

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.search.searchResults);

  const handleKeywordChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      dispatch(changeSearchText(search));
    } catch {
      console.error(Error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickCard = (place) => {
    dispatch(connection(place));
    dispatch(info(place));
  };

  return (
    <>
      <S.SearchDiv>
        <form onSubmit={(e) => handleSearch(e)}>
          <S.SearchInput
            type="text"
            value={search}
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
              <S.PlaceDiv className="info">
                <S.PlaceName>{place.place_name}</S.PlaceName>
                {/* 도로명 주소와 지번 주소가 있는 경우*/}
                <S.Placecontents>
                  {place.road_address_name && (
                    <>
                      <S.PlaceNewAddress>{place.road_address_name}</S.PlaceNewAddress>
                      <br />
                      <S.PlaceOldAddress className="jibun gray">{`(${place.address_name})`}</S.PlaceOldAddress>
                    </>
                  )}
                </S.Placecontents>
                {/* 도로명 주소만 있는 경우*/}
                {!place.road_address_name && <span>{place.address_name}</span>}
                {place.phone ? <S.PlaceTel>{`☎ ${place.phone}`}</S.PlaceTel> : null}
              </S.PlaceDiv>
            </S.ListLi>
          ))}
        </S.ListUl>
      </S.ListDiv>
    </>
  );
};

export default Search;
