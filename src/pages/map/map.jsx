import React, { useEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
import Navbar from '../navbar/navbar';
import { useNavigate } from 'react-router-dom';
import './map.css';

const { kakao } = window;

function Map() {
  const navigate = useNavigate();
  const [farms, setFarms] = useState([]);

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
          // for (let i = 0; i < data.results.length; i++) {
          //   console.log(`Longitude${i}:`, data.results[i].longitude);
          //   console.log(`Latitude${i}:`, data.results[i].latitude);
          // }
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

        //장소 표시
        var infowindow = new kakao.maps.InfoWindow({
          content: `<div class="memo">${farm.farm_name}</div>`
        });
      });
    }
  }, [farms]);


  return (
    <>
      <Navbar />
      <div id='map' style={{ width: '800px', height: '800px' }}>
      </div>
    </>
  );
}

export default Map;
