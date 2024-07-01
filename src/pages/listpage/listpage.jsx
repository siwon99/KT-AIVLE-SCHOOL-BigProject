import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import "./listpage.css"

// 상세 정보 페이지
const ListPage = () => {
  const navigate = useNavigate();

  const [farm, setFarm] = useState({
    farm_id: '',
    farm_owner: '',
    latitude: '',
    longitude: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      fetch('http://3.39.228.42/farms/list/', { 
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
        console.log('data:', data);
        setFarm(data);
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
      <div className="detail-info">
        <div className="title">농지 리스트</div>

        <div className='details'>
          <span className="info">{setFarm.farm_owner}</span> 
          <span className="info">{setFarm.farm_created}</span>
          <span className="info">{setFarm.farm_status}</span>
        
          <div className="btn">
            <button className="backBtn">선택</button>
          </div>
        </div>
      </div>

      <div className="map"></div>
    </>
  );
};

export default ListPage;
