import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import './detail.css';

// 날짜함수
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
};

// 시간함수
const formatTime = (timeString) => {
  const time = new Date(`1970-01-01T${timeString}Z`); 
  let hours = time.getHours();
  const minutes = time.getMinutes();
  const period = hours >= 12 ? '오후' : '오전';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const formattedTime = `${period} ${hours}:${minutes.toString().padStart(2, '0')}`;
  return formattedTime;
};

// 상세 정보 페이지
const DetailPage = () => {
  const navigate = useNavigate();
  const { farm_id } = useParams();

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

  //농지 상세정보 변수
  const [farmDate, setFarmDate] = useState('');
  const [farmTime, setFarmTime] = useState('');
  const [farmStatusText, setFarmStatusText] = useState('');

  useEffect(() => {
    if (!farm_id) return;
    // 사용자가 로그인할 때 저장된 토큰
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`http://3.39.228.42/farms/detail/${farm_id}`, { 
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
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
        //날짜 및 시간
        setLandDetail(data);
        setLandLog(data.status_logs[0]);
        setFarmDate(formatDate(data.status_logs[0].farm_created));
        setFarmTime(formatTime(data.status_logs[0].farm_created.split('T')[1].split('Z')[0]));

        //분양 상태 설정
        if (data.status_logs[0].farm_status === 0) {
          setFarmStatusText('유휴');
        } else if (data.status_logs[0].farm_status === 1) {
          setFarmStatusText('분양');
        } else {
          setFarmStatusText('알 수 없음');
        }
      })
      .catch(error => {
        alert('오류가 발생했습니다.');
      });
    } else {
      navigate('/login');
    }
  }, [farm_id, navigate]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="detail-info">
          <div className="d-title">농지 상세정보</div>
          <div className="details">
            <span className="info"><div className='info-title'>소유주:</div> {landDetail.farm_owner}</span> 
            <span className="info"><div className='info-title'>위도/경도:</div> {landDetail.latitude}, {landDetail.longitude}</span> 
            <span className="info"><div className='info-title'>게시 날짜:</div> {farmDate}</span>
            <span className="info"><div className='info-title'>게시 시간:</div> {farmTime}</span>
            <span className="info"><div className='info-title'>농지 상태:</div> {farmStatusText}</span>
            <div className="btn">
              <a href="/land_list" className="backBtn">이전</a>
              <button className="rentBtn">임대</button>
            </div>
          </div>
        </div>
        <div className="map">지도 사진</div>
      </div>
    </>
  );
};

export default DetailPage;
