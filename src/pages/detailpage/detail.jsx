import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import './detail.css'

// 상세 정보 페이지
const DetailPage = () => {
  const navigate = useNavigate();
  const {farm_id} = useParams();

  const [landDetail, setLandDetail] = useState({
    farm_id: 0,
    farm_owner: '',
    latitude: 0,
    longitude: 0,
  });

  const [landLog, setLandLog] = useState({
    farm_status: 0,
    farm_created: '',
    user_id: 0
  });

  useEffect(() => {
    if (!farm_id) return;
    //사용자가 로그인할 때 저장된 토큰
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`http://3.39.228.42/farms/detail/${farm_id}`, { 
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token  ${token}`,
        }, 
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then(data => {
        setLandDetail(data);
        setLandLog(data.status_logs[0])
      })
      .catch(error => {
        alert('오류가 발생했습니다.');
      });
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="detail-info">
          <div className="d-title">농지 상세정보</div>
          <div className="details">
            <span className="info">farm_owner: {landDetail.farm_owner}</span> 
            <span className="info">위도/경도: {landDetail.latitude}, {landDetail.longitude}</span> 
            <span className="info">farm_created: {landLog.farm_created}</span>
            <span className="info">farm_status: {landLog.farm_status}</span>
            <div className="btn">
              <a href="/land_list" className="backBtn">이전</a>
              <button className="rentBtn">임대</button>
            </div>
          </div>
        </div>
        <div className="map"></div>
      </div>
    </>
  );
};

export default DetailPage;
