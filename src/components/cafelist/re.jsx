useEffect(() => {
  if (!map || !location.center.lat || !location.center.lng) return;

  const ps = new window.kakao.maps.services.Places();

  ps.keywordSearch(
    '카페',
    (data, status) => {
      console.log('카페 검색 결과:', data);
      dispatch(addResults(data));

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
    {
      location: new window.kakao.maps.LatLng(location.center.lat, location.center.lng),
      radius: 1000
    }
  );
}, [map, location.center.lat, location.center.lng]);