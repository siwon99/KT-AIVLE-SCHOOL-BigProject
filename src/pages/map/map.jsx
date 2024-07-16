import React, { useEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
import Navbar from '../navbar/navbar';
import { useNavigate } from 'react-router-dom';
import './map.css';
import Modal from './modal';

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

  // 모달 관련 상태
  const [modalFarmId, setModalFarmId] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false); // 확장 상태 관리

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token) {
      fetch('http://3.39.228.42/farms/user/list/', { 
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
        if(data) {
          setLandDetail({
            farm_id: data.farm_id,
            farm_name: data.farm_name,
            farm_owner: data.farm_owner,
            farm_size: data.farm_size,
            latitude: data.latitude,
            longitude: data.longitude,
            image: data.image ? { farm_image: data.image.farm_image } : null
          })
          setFarms(data);
        }
      })
      // 로컬 스토리지에만 토큰이 남아있어도 로그인 페이지로 유도 가능
      .catch(error => {
        navigate('/login');
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
        level: 8
      };
      //지도 불러오기
      const map = new kakao.maps.Map(container, options);

      //열려있는 모달창 & 마커 추적하기
      let currentOverlay = null;
      let currentMarker = null;

      //마커 생성
      farms.forEach(farm => {
        const position = new kakao.maps.LatLng(farm.latitude, farm.longitude);
        const marker = new kakao.maps.Marker({
          position: position
        });
        marker.setMap(map);

        const content = `
        <div class="content-wrap">
          <div class="content-info">
            <div class="content-title">${farm.farm_name}</div>
            <div class="content-owner">소유자: ${farm.farm_owner}</div>
            <div class="content-size">면적: ${farm.farm_size}</div>
            <a class="content-link" data-id="${farm.farm_id}">더 보기 ></a>
          </div>   
        </div>
        `;

      const overlay = new kakao.maps.CustomOverlay({
        content: content,
        position: marker.getPosition(),
        map: map,
        yAnchor: 1.5,
        zIndex: 3
      });

      overlay.setMap(null);

      kakao.maps.event.addListener(marker, 'click', function () {
        if (currentOverlay && currentMarker === marker) {
          currentOverlay.setMap(null);
          currentOverlay = null;
          currentMarker = null;
        } else {
          if (currentOverlay) {
            currentOverlay.setMap(null); 
          }
          overlay.setMap(map);
          currentOverlay = overlay; 
          currentMarker = marker;  
        }
      });
    
      // 더보기 링크 클릭 시 모달창 띄우기 및 확장 상태로 변경
      document.addEventListener('click', function (e) {
        if (e.target && e.target.className === 'content-link') {
          const farmId = e.target.getAttribute('data-id');
          setModalFarmId(farmId);
          setIsExpanded(true); // 상태 변경
        }
      });

    });
  }
}, [farms, landDetail.image, navigate]);

const closeModal = () => {
  setModalFarmId(null);
  setIsExpanded(false); // 상태 초기화
};

  return (
    <>
      <Navbar />
      <div className="mappage">
        <div className={`map-container ${isExpanded ? 'expanded' : ''}`}>
          <div className="map-title">지도</div>
          <div className='mapbox'>
            <div id='map'/> {/* style={{ width: '1180px', height: '620px' }} */}
          </div>
        </div>
        {modalFarmId && <Modal farm_id={modalFarmId} closeModal={closeModal} />}
      </div>
    </>
  );
}

export default Map;