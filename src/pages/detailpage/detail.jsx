import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import { rentFarm } from '../../service/apiService';
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
    user_id: 0,
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
      fetch(`http://3.39.228.42/farms/user/detail/${farm_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error();
          }
        })
        .then((data) => {
          console.log('data:', data);
          // console.log('img', data.image.farm_image)

          setLandDetail({
            farm_id: data.farm_id,
            farm_name: data.farm_name,
            farm_owner: data.farm_owner,
            farm_size: data.farm_size,
            latitude: data.latitude,
            longitude: data.longitude,
            image: data.image ? { farm_image: data.image.farm_image } : null,
          });

          //날짜 및 시간
          setLandLog(data.status_logs[0]);
          setFarmDate(formatDate(data.status_logs[0].farm_created));
          setFarmTime(formatTime(data.status_logs[0].farm_created.split('T')[1].split('Z')[0]));

          //분양 상태 설정
          if (data.status_logs.length > 0) {
            const lastLog = data.status_logs[data.status_logs.length - 1];

            if (lastLog.farm_status === 0) {
              setFarmStatusText('분양 완료');
            } else if (lastLog.farm_status === 1) {
              setFarmStatusText('유휴 농지');
            } else if (lastLog.farm_status === 2) {
              setFarmStatusText('분양 신청');
            } else if (lastLog.farm_status === 3) {
              setFarmStatusText('분양(승인) 완료');
            } else {
              setFarmStatusText('알 수 없음');
            }
          }
        })
        // 로컬 스토리지에만 토큰이 남아있어도 로그인 페이지로 유도 가능
        .catch((error) => {
          navigate('/notfound');
        });
    } else {
      navigate('/login');
    }
  }, [farm_id, navigate]);

  const handleBackClick = () => {
    localStorage.setItem('currentFarmId', farm_id);
    navigate('/land_list');
  };

  const handleRentClick = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await rentFarm(farm_id, token);
        alert('임대 신청이 완료되었습니다.');
        localStorage.setItem('currentFarmId', farm_id);
        navigate('/land_list');
      } catch (error) {
        console.log('임대 신청 중 오류:', error);
        alert('임대 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="page">
      <Navbar />
      <div className="detailpage">
        <div className="detail-container">
          <div className="detail-info">
            <div className="detail-title">농지 상세정보</div>
            <div className="details">
              <span className="d-info" info-title="농지명">
                <span>{landDetail.farm_name}</span>
              </span>
              <span className="d-info" info-title="소유주">
                <span>{landDetail.farm_owner}</span>
              </span>
              <span className="d-info" info-title="위도 / 경도">
                <span>
                  {landDetail.latitude}, {landDetail.longitude}
                </span>
              </span>
              <span className="d-info" info-title="농지 크기">
                <span>{landDetail.farm_size}</span>
              </span>
              <span className="d-info" info-title="게시 날짜">
                <span>{farmDate}</span>
              </span>
              <span className="d-info" info-title="게시 시간">
                <span>{farmTime}</span>
              </span>
              <span className="d-info" info-title="농지 상태">
                <span>{farmStatusText}</span>
              </span>
              <div className="btn">
                <button onClick={handleBackClick} className="backBtn">
                  이전
                </button>
                <button onClick={handleRentClick} className="rentBtn">
                  신청
                </button>
              </div>
            </div>
          </div>

          <div className="map">
            {landDetail.image ? (
              <img src={landDetail.image.farm_image} alt="FarmImg" />
            ) : (
              <p className="noImg">이미지가 등록되지 않았습니다.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
