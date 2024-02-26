import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addResults } from '../shared/store/modules/list';
import LocationOver from './LocationOver';
// import { connection } from '../shared/store/modules/listConnection';

const Location = () => {
  const dispatch = useDispatch();

  //검색기능
  const search = useSelector((state) => state.search);
  console.log('search', search);

  //카드 리스트 연결
  const selector = useSelector((state) => state.connection);
  console.log('selector', selector);

  const [selectedPlace, setSelectedPlace] = useState([]);
  const [totalCafeList, setTotalCafeList] = useState([]);
  const [info, setInfo] = useState();
  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);
  const [location, setLocation] = useState({
    center: {
      lat: 37.566826,
      lng: 126.9786567
    },
    errMsg: null
  });

  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation((prev) => ({
            ...prev,
            center: { lat: latitude, lng: longitude }
          }));
        },
        (err) => {
          console.log(err.message);
        }
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      console.log('Geolocation을 지원하지 않습니다.');
    }
  }, []);

  useEffect(() => {
    if (!map || !location.center.lat || !location.center.lng) return;

    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch(
      '카페',
      (data, status) => {
        console.log('카페 검색 결과:', data);
        dispatch(addResults(data));

        setTotalCafeList(data);
        if (status === window.kakao.maps.services.Status.OK) {
          const bounds = new window.kakao.maps.LatLngBounds();
          let newMarkers = [];

          for (var i = 0; i < Math.min(15, data.length); i++) {
            newMarkers.push({
              position: {
                lat: data[i].y,
                lng: data[i].x
              },
              content: data[i].place_name,
              address: data[i].address_name,
              id: data[i].id,
              phone: data[i].phone
            });
            bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
          }

          setMarkers(newMarkers);
          map.setBounds(bounds);
          console.log('설정된 마커:', newMarkers);
        }
      },
      {
        location: new window.kakao.maps.LatLng(location.center.lat, location.center.lng),
        radius: 1000
      }
    );
  }, [map, location.center.lat, location.center.lng]);

  //지도 드래그시 마커 변경
  const handleDragEnd = () => {
    const center = map.getCenter();
    setLocation({
      center: { lat: center.getLat(), lng: center.getLng() }
    });
  };

  const selectedPlaceHandler = (marker) => {
    const getPlace = totalCafeList.filter((location) => location.place_name === marker.content);
    setInfo(marker);
    setSelectedPlace(getPlace);
  };

  return (
    <Map
      center={location.center}
      style={{
        width: '100%',
        height: '100vh'
      }}
      level={3}
      onCreate={setMap}
      onDragEnd={handleDragEnd}
    >
      {markers.map((marker, index) => (
        <MapMarker key={`marker-${index}`} position={marker.position} onClick={() => selectedPlaceHandler(marker)}>
          {info && info.content === marker.content && selectedPlace && (
            <div>{<LocationOver selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />}</div>
          )}
        </MapMarker>
      ))}
    </Map>
  );
};

export default Location;
