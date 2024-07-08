import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import './listpage.css';

// 상세 정보 페이지
const ListPage = () => {
  const navigate = useNavigate();
  const [farms, setFarms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const farmsPerPage = 5; // 한 페이지에 나열할 목록 수

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      fetch('http://3.39.228.42/farms/list/', { 
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
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
        setFarms(data.results.reverse());
      })
      .catch(error => {
        alert('오류가 발생했습니다.');
      });
    } else {
      navigate('/login');
    }
  }, [navigate]);

  // farms 상태가 업데이트될 때마다 현재 상태를 출력
  useEffect(() => {
    console.log('farms:', farms);
  }, [farms]);

  // 현재 페이지에 맞는 농지 리스트를 반환
  const indexOfLastFarm = currentPage * farmsPerPage;
  const indexOfFirstFarm = indexOfLastFarm - farmsPerPage;
  const currentFarms = farms.slice(indexOfFirstFarm, indexOfLastFarm);

  // 페이지 번호 변경 핸들러
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="page">
      <Navbar />
      <div className="lists-info">
        <div className="title">농지 리스트</div>

        <div>
          {currentFarms.length > 0 ? (
            currentFarms.map((farm, index) => (
              <div className='lists' key={index}>
                <div className='farm-info'>
                  <div className='num'>{farms.length - (indexOfFirstFarm + index)}.</div>
                  <div className='farm-name'>[{farm.farm_name}]</div>
                  <div className='farm-owner'>소유자: {farm.farm_owner}</div>
                  <div className='farm-size'>농지 크기: {farm.farm_size}</div>
                </div>

                <a href={`/detail/${farm.farm_id}`} className="backBtn">선택</a>
              </div>
            ))
          ) : (
            <p>게시된 농지가 없습니다.</p>
          )}
        </div>

        <div className="pagination">
          {[...Array(Math.ceil(farms.length / farmsPerPage)).keys()].map(number => (
            <button key={number + 1} onClick={() => paginate(number + 1)}>
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListPage;
