import React, { useEffect } from 'react';
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
} from 'styles/DetailOverlay';

function DetailOverlay() {
  const kakaoMapScript = document.createElement('script');
  kakaoMapScript.async = false;
  kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=	1284ab0477363aece073df2fafb65d3b&autoload=false`;
  document.head.appendChild(kakaoMapScript);

  const onLoadKakaoAPI = () => {
    window.kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      };

      // 1. 지도 띄우기
      const map = new window.kakao.maps.Map(container, options);

      // 2. 중앙에 핀 꽂기
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: map.getCenter()
      });

      // 3. 다른 핀 꽂기
      new window.kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new window.kakao.maps.LatLng(33.450936, 126.569477)
      });
    });
  };

  kakaoMapScript.addEventListener('load', onLoadKakaoAPI);

  // // 마커 위에 커스텀오버레이를 표시합니다
  //   const overlay = new kakao.maps.CustomOverlay({
  //     content: content,
  //     map: map,
  //     position: marker.getPosition()
  //   });

  //   // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
  //   const viewOverlay = () => {
  //     kakao.maps.event.addListener(marker, 'click', function() {
  //       overlay.setMap(map);});
  //   };

  //   // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
  //   const closeOverlay = () => {
  //     overlay.setMap(null);
  //   };

  return (
    <>
      <>
        <div id="map" style={{ width: '100%', height: '100vh', marginLeft: '200px' }}></div>;
      </>
      <ArticleWrapper>
        <CafeInfo>
          <CafeTitle>
            Cafe Title
            <CloseButton onclick={closeOverlay}> 닫기 </CloseButton>
          </CafeTitle>

          <BodyWrapper>
            <ImgWrapper>{/* <img src="null" width="73" height="70"> */}</ImgWrapper>

            <CafeAddressInfo>
              <Ellipsis>제주특별자치도 제주시 첨단로 242</Ellipsis>
              <Jibun>(우) 63309 (지번) 영평동 2181</Jibun>
              <LinkWrapper>
                <a href="https://www.kakaocorp.com/main" target="_blank">
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

export default DetailOverlay;
