import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import './ibdetailpage.css';

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
const IbDetailPage = () => {
  const navigate = useNavigate();
  const { farm_id } = useParams();

  const [landDetail, setLandDetail] = useState({
    farm_id: 0,
    farm_name: '',
    farm_owner: '',
    farm_size: 0,
    latitude: 0,
    longitude: 0,
    pd_image: null,
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
      fetch(`http://3.39.228.42/farms/ibdetail/${farm_id}`, { 
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
        console.log('data:', data)
        // console.log('img', data.image.farm_image)

        setLandDetail({
          farm_id: data.farm_id,
          farm_name: data.farm_name,
          farm_owner: data.farm_owner,
          farm_size: data.farm_size,
          latitude: data.latitude,
          longitude: data.longitude,
          pd_image: data.pd_image ? { farm_pd_image: data.pd_image.farm_pd_image } : null
        })

        //날짜 및 시간
        setLandLog(data.status_logs[0]);
        setFarmDate(formatDate(data.status_logs[0].farm_created));
        setFarmTime(formatTime(data.status_logs[0].farm_created.split('T')[1].split('Z')[0]));

        //분양 상태 설정
        if (data.status_logs[0].farm_status === 0) {
          setFarmStatusText('유휴 농지');
        } else if (data.status_logs[0].farm_status === 1) {
          setFarmStatusText('분양 완료');
        } else if (data.status_logs[0].farm_status === 2) {
          setFarmStatusText('불법 건축물');
        } else {
          setFarmStatusText('알 수 없음');
        }
      })
      // 로컬 스토리지에만 토큰이 남아있어도 로그인 페이지로 유도 가능
      .catch(error => {
        navigate('/login');
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
          <div className="d-title">불법 건축물(농지) 상세정보</div>
          <div className="details">
            <span className="d-info"><div className='info-title'>농지명:</div> {landDetail.farm_name}</span> 
            <span className="d-info"><div className='info-title'>소유주:</div> {landDetail.farm_owner}</span> 
            <span className="d-info"><div className='info-title'>위도 / 경도:</div> {landDetail.latitude}, {landDetail.longitude}</span> 
            <span className="d-info"><div className='info-title'>농지 크기:</div> {landDetail.farm_size}</span> 
            <span className="d-info"><div className='info-title'>게시 날짜:</div> {farmDate}</span>
            <span className="d-info"><div className='info-title'>게시 시간:</div> {farmTime}</span>
            <span className="d-info"><div className='info-title'>농지 상태:</div> {farmStatusText}</span>
            <div className="btn">
              <a href="/iblist" className="backBtn">이전</a>
              <button className="rentBtn">완료</button>
            </div>
          </div>
        </div>

        <div className="map">
          {landDetail.pd_image ? (
            <img src={landDetail.pd_image.farm_pd_image} alt="FarmImg" />
          ) : (
            <p className='noImg'>이미지가 등록되지 않았습니다.</p>
          )}
        </div>

      </div>
    </>
  );
};

export default IbDetailPage;