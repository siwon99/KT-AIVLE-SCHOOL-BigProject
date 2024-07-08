import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import './map.css';

const { kakao } = window;

function Map() {
  useEffect(() => {
    if (typeof window.kakao !== "undefined") {
      const position = new kakao.maps.LatLng(36.345401, 127.384530);

      const container = document.getElementById('map');
      const options = {
        center: position,
        level: 3
      };
      //지도 불러오기
      const map = new kakao.maps.Map(container, options);

      //마커 생성
      const marker = new kakao.maps.Marker({
        position: position
      });
      marker.setMap(map);

      // 인포윈도우로 장소에 대한 설명을 표시합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: '<div class="memo">농지</div>'
      });
      infowindow.open(map, marker);

    }
  }, []);

  return (
    <div id='map' style={{ width: '800px', height: '800px' }}>
    </div>
  );
}

export default Map;
