import * as S from '../styles/LocationOverStyle';

function LocationOver({ selectedPlace, setSelectedPlace }) {
  if (!selectedPlace || selectedPlace.length === 0) {
    return null; // 선택된 장소가 없을 때 렌더링을 중지합니다.
  }

  const { place_name, place_url, address_name, road_address_name, phone } = selectedPlace[0];
  console.log(selectedPlace);

  // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
  const closeOverlay = () => {
    setSelectedPlace('');
  };
  return (
    <>
      <S.ArticleWrapper>
        <S.CafeInfo>
          <S.CafeTitle>
            {place_name}
            <S.CloseButton onClick={closeOverlay} />
          </S.CafeTitle>

          <S.BodyWrapper>
            <S.CafeAddressInfo>
              <S.Ellipsis>{address_name}</S.Ellipsis>
              <S.LinkWrapper>
                <S.Jibun>{road_address_name}</S.Jibun>
                <p>{phone}</p>
                <a href={place_url} target="_blank">
                  홈페이지
                </a>
              </S.LinkWrapper>
            </S.CafeAddressInfo>
          </S.BodyWrapper>
        </S.CafeInfo>
      </S.ArticleWrapper>
    </>
  );
}

export default LocationOver;
