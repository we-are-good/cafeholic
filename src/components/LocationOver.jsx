import {
  ArticleWrapper,
  BodyWrapper,
  CafeAddressInfo,
  CafeInfo,
  CafeTitle,
  CloseButton,
  Ellipsis,
  ImgWrapper,
  Jibun,
  LinkWrapper
} from '../styles/LocationOverStyle';

function LocationOver({ selectedPlace, setSelectedPlace }) {
  const { place_name, place_url, address_name, road_address_name, phone } = selectedPlace[0];
  console.log(selectedPlace);

  // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
  const closeOverlay = () => {
    setSelectedPlace('');
  };
  return (
    <>
      <ArticleWrapper>
        <CafeInfo>
          <CafeTitle>
            {place_name}
            <CloseButton onClick={closeOverlay}> </CloseButton>
          </CafeTitle>

          <BodyWrapper>
            <ImgWrapper>{/* <img src="null" width="73" height="70"> */}</ImgWrapper>

            <CafeAddressInfo>
              <Ellipsis> {address_name} </Ellipsis>
              <Jibun> {road_address_name} </Jibun>
              <LinkWrapper>
                <div>{phone}</div>
                <a href={place_url} target="_blank">
                  홈페이지
                </a>
              </LinkWrapper>
            </CafeAddressInfo>
          </BodyWrapper>
        </CafeInfo>
      </ArticleWrapper>
    </>
  );
}

export default LocationOver;
