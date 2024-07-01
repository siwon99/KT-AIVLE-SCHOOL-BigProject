import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import './listpage.css'

// 상세 정보 페이지
const ListPage = () => {
  const navigate = useNavigate();
  const [farms, setFarms] = useState([]);

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
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then(data => {
        console.log('data:', data.results);
        setFarms(data.results);
      })
      .catch(error => {
        alert('오류가 발생했습니다.');
      });
    } else {
      navigate('/login');
    }
  }, [navigate]);

  //farms 상태가 업데이트될 때마다 현재 상태를 출력
  useEffect(() => {
    console.log('farms:', farms);
  }, [farms]);

  //선택한 index의 detail페이지 넘어가기
  const handleFarmClick = (farm_id) => {
    navigate(`/detail/${farm_id}`);
  };

  return (
    <>
      <Navbar />
      <div className="detail-info">
        <div className="title">농지 리스트</div>

        <div>
          {farms.length > 0 ? (
            farms.map((farm, index) => (
              <div key={index} className='details'>
                <div className='farm-info'>
                  <div className='num'>{index + 1}</div>
                  <div className='farm-name'>[{farm.farm_name}]</div>
                  <div className='farm-owner'>소유자: {farm.farm_owner}</div>
                  <div className='farm-size'>농지 크기: {farm.farm_size}</div>
                </div>

                <a href="" className="backBtn" onClick={() => handleFarmClick(farm.farm_id)}>선택</a>
              </div>
            ))
          ) : (
            <p>게시된 농지가 없습니다.</p>
          )}
        </div>

        <div><p></p></div>
      </div>
    </>
  );
};

export default ListPage;