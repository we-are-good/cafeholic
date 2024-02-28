import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocationOver from './LocationOver';
import { changeLocation, containSearchResults } from '../shared/store/modules/search';

const Location = () => {
  const dispatch = useDispatch();

  const searchResults = useSelector((state) => state.search.searchResults);
  // console.log('searchResults', searchResults);

  //검색기능
  const search = useSelector((state) => state.search);
  // console.log('search', search);

  const location = useSelector((state) => state.search.location);
  const searchText = useSelector((state) => state.search.searchText);
  const totalCafeList = useSelector((state) => state.search);

  const [selectedPlace, setSelectedPlace] = useState([]);
  const [info, setInfo] = useState();
  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);

  //카드 리스트 연결
  const selector = useSelector((state) => state.connection);
  // console.log(selector);

  useEffect(() => {
    if (window.navigator.geolocation) {
      const watchId = window.navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          dispatch(
            changeLocation({
              lat: latitude,
              lng: longitude
            })
          );
        },
        (err) => {
          console.log(err.message);
        }
      );

      return () => {
        window.navigator.geolocation.clearWatch(watchId);
      };
    } else {
      console.log('Geolocation을 지원하지 않습니다.');
    }
  }, []);

  useEffect(() => {
    if (!map || !location.lat || !location.lng) return;

    const ps = new window.kakao.maps.services.Places();

    ps.keywordSearch(
      searchText,
      (data, status) => {
        if (!Array.isArray(data)) {
          return;
        }
        dispatch(containSearchResults(data));

        if (status === window.kakao.maps.services.Status.OK) {
          const bounds = new window.kakao.maps.LatLngBounds();
          //거색된 장소로 범위 재설정
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
      { category_group_code: 'CE7', location: new window.kakao.maps.LatLng(location.lat, location.lng), radius: 1000 }
    );
  }, [searchText, map, location.lat, location.lng]);

  //지도 드래그시 마커 변경
  const handleDragEnd = () => {
    const center = map.getCenter();

    dispatch(
      changeLocation({
        lat: center.getLat(),
        lng: center.getLng()
      })
    );
  };

  const selectedPlaceHandler = (marker) => {
    const getPlace = searchResults.filter((location) => location.place_name === marker.content);
    setInfo(marker);
    setSelectedPlace(getPlace);
  };

  // useEffect(() => {
  //   if (!selector.isClick) return;
  //   const getPlace = searchResults.find((location) => location.id === selector.id);
  //   setSelectedPlace(getPlace);
  // }, [selector.isClick, selector.id, searchResults]);

  return (
    <Map
      center={location}
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
            <ul>{<LocationOver selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />}</ul>
          )}
          {/* {((info && info.content === marker.content) || (selector.isClick && selector.id === marker.id)) &&
            selectedPlace && (
              <ul>{<LocationOver selectedPlace={selectedPlace} setSelectedPlace={setSelectedPlace} />}</ul>
            )} */}
        </MapMarker>
      ))}
    </Map>
  );
};

export default Location;
