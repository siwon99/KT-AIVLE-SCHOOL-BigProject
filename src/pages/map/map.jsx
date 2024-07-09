import React, { useEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
import Navbar from '../navbar/navbar';
import { useNavigate } from 'react-router-dom';
import './map.css';

const { kakao } = window;

function Map() {
  const navigate = useNavigate();
  const [farms, setFarms] = useState([]);

  const [landDetail, setLandDetail] = useState({
    farm_id: 0,
    farm_name: '',
    farm_owner: '',
    farm_size: 0,
    latitude: 0,
    longitude: 0,
    image: null,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token) {
      fetch('http://3.39.228.42/farms/list/', { 
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
        }, 
      })
      .then(response => {
        console.log('response:', response);
        
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then(data => {
        if(data && data.results) {
          setLandDetail({
            farm_id: data.farm_id,
            farm_name: data.farm_name,
            farm_owner: data.farm_owner,
            farm_size: data.farm_size,
            latitude: data.latitude,
            longitude: data.longitude,
            image: data.image ? { farm_image: data.image.farm_image } : null
          })
          setFarms(data.results);
        }
      })
      //로컬 스토리지에만 토큰이 남아있어도 로그인 페이지로 유도 가능
      .catch(error => {
        throw new Error();
      });
    } else {
      navigate('/login');
    }
  }, [navigate]);

  // farms 상태가 업데이트될 때마다 현재 상태를 출력
  useEffect(() => {
    console.log('farms:', farms);
  }, [farms]);

  useEffect(() => {
    if (typeof window.kakao !== "undefined" && farms.length > 0) {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(farms[0].latitude, farms[0].longitude),
        level: 10
      };
      //지도 불러오기
      const map = new kakao.maps.Map(container, options);

      //마커 생성
      farms.forEach(farm => {
        const position = new kakao.maps.LatLng(farm.latitude, farm.longitude);
        const marker = new kakao.maps.Marker({
          position: position
        });
        marker.setMap(map);

        const content = `
        <div class="wrap">
          <div class="info">
            <div class="title">${farm.farm_name}</div>
            <a class="link" data-id="${farm.farm_id}">더 보기 ></a>
          </div>   
        </div>
        `

      const overlay = new kakao.maps.CustomOverlay({
        content: content,
        position: marker.getPosition(),
        map: map,
        yAnchor: 1.5,
        zIndex: 3
      });

      overlay.setMap(null);

      kakao.maps.event.addListener(marker, 'click', function () {
        if (overlay.getMap()) {
            overlay.setMap(null);
        } else {
            overlay.setMap(map);
        }
      });
    
      // 더보기 링크 클릭 시 디테일 페이지로 이동
      document.addEventListener('click', function (e) {
        if (e.target && e.target.className === 'link') {
          const farmId = e.target.getAttribute('data-id');
          navigate(`/detail/${farmId}`);
        }
      });

    });
  }
}, [farms,  landDetail.image, navigate]);

  return (
    <>
      <Navbar />
      <div id='map' style={{ width: '680px', height: '680px' }}>
      </div>
    </>
  );
}

export default Map;