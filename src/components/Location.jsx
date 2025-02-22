import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LocationOverlay from './LocationOverlay';
import { changeLocation, containSearchResults } from '../shared/store/modules/search';
import { connection } from '../shared/store/modules/listConnection';
import { info } from '../shared/store/modules/info';

const Location = () => {
  const dispatch = useDispatch();

  const searchResults = useSelector((state) => state.search.searchResults);
  const location = useSelector((state) => state.search.location);
  const searchText = useSelector((state) => state.search.searchText);

  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);

  //카드 리스트 연결
  const selector = useSelector((state) => state.connection);
  const infoList = useSelector((state) => state.info);

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
      console.error(Error);
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
          //검색된 장소로 범위 재설정
          const newMarkers = [];

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
    const getPlace = searchResults.find((location) => location.place_name === marker.content);
    dispatch(connection(getPlace));
    dispatch(info(getPlace));
    console.log(marker);
  };

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
      {markers.map((marker) => (
        <MapMarker key={`marker-${marker.id}`} position={marker.position} onClick={() => selectedPlaceHandler(marker)}>
          {(infoList && infoList.content === marker.content && selector) ||
          (infoList && selector.id === marker.id && selector) ? (
            <ul>{<LocationOverlay />}</ul>
          ) : null}
        </MapMarker>
      ))}
    </Map>
  );
};

export default Location;
