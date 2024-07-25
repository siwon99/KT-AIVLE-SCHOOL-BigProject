import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './modal.css';

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

const Modal = ({farm_id, closeModal}) => {
  const [landDetail, setLandDetail] = useState({
    farm_id: 0,
    farm_name: '',
    farm_owner: '',
    farm_size: 0,
    latitude: 0,
    longitude: 0,
    image: null,
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!farm_id) return;
    // 사용자가 로그인할 때 저장된 토큰
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`http://3.39.228.42:8080/farms/user/detail/${farm_id}`, { 
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
        setLandDetail({
          farm_id: data.farm_id,
          farm_name: data.farm_name,
          farm_owner: data.farm_owner,
          farm_size: data.farm_size,
          latitude: data.latitude,
          longitude: data.longitude,
          image: data.image ? { farm_image: data.image.farm_image } : null
        })

        //날짜 및 시간
        setLandLog(data.status_logs[0]);
        setFarmDate(formatDate(data.status_logs[0].farm_created));
        setFarmTime(formatTime(data.status_logs[0].farm_created.split('T')[1].split('Z')[0]));

        //분양 상태 설정
        if (data.status_logs[0].farm_status === 0) {
          setFarmStatusText('확인 예정');
        } else if (data.status_logs[0].farm_status === 1) {
          setFarmStatusText('유휴 농지');
        } else if (data.status_logs[0].farm_status === 2) {
          setFarmStatusText('분양 신청');
        } else if (data.status_logs[0].farm_status === 3) {
          setFarmStatusText('분양(승인) 완료');
        } else {
          setFarmStatusText('알 수 없음');
        }
        setIsOpen(true);
      })
      .catch(error => {
        console.error('Error fetching farm detail:', error);
      });
    }
  }, [farm_id]);

  // 모달 창 닫기
  const closeModalHandler = () => {
    setIsOpen(false); 
    closeModal(); // 상위 컴포넌트에서 전달받은 닫기 함수 호출
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-container">
      <div className="modal-content">
        <button className="modal-closebtn" onClick={closeModalHandler}>
          X
        </button>
        <div className="modal-info">
          <div className="modal-title">농지 상세정보</div>
          <div className="modal-detail">
            <span className="m-info"><div className='m-subtitle'>상세 주소: {landDetail.farm_name}</div> </span> 
            <span className="m-info"><div className='m-subtitle'>지목: {landDetail.farm_owner}</div> </span> 
            <span className="m-info"><div className='m-subtitle'>농지 면적: {landDetail.farm_size}</div> </span> 
            <span className="m-info"><div className='m-subtitle'>게시 날짜: {farmDate}</div> </span>
            <span className="m-info"><div className='m-subtitle'>농지 상태: {farmStatusText}</div> </span>
          </div>
        </div>

        <div className="modal-map">
          {landDetail.image ? (
            <img src={landDetail.image.farm_image} alt="FarmImg" />
          ) : (
            <p className='modal-noImg'>이미지 없음</p>
          )}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
    farm_id: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired
  };
  

export default Modal;
