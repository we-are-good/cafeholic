import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
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
        let marker = new window.kakao.maps.Marker({
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
  }, []);
  return (
    <>
      <div id="map" style={{ width: '100%', height: '100vh', marginLeft: '200px' }}></div>;
    </>
  );
};

export default Home;
