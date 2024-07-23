import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar.jsx';
import { getAdminMypage, approveRent, refuseRent } from '../../service/apiService.js';
import './adminmypage.css';

const AdminMyPage = () => {
  const navigate = useNavigate();
  const [logs, setLogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3; // 한 페이지에 나열할 목록 수
  const pageCount = 5; // 표시할 페이지 번호 갯수

  const getStatusText = (status) => {
    switch (status) {
      case 0:
        return '분양 완료';
      case 1:
        return '유휴 농지';
      case 2:
        return '분양 신청';
      case 3:
        return '승인 완료';
      default:
        return '알 수 없음';
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      getAdminMypage(token)
        .then(data => {
          const reversedData = data.reverse();
          setLogs(reversedData);

          // currentFarmId에 맞는 페이지 설정
          const currentFarmId = localStorage.getItem('currentFarmId');
          if (currentFarmId) {
            const index = reversedData.findIndex(farm => farm.farm_id.toString() === currentFarmId);
            if (index !== -1) {
              const page = Math.ceil((index + 1) / pageSize);
              setCurrentPage(page);
              localStorage.removeItem('currentFarmId');
            }
          }
        })
        .catch(error => {
          navigate('/notfound');
        });
    } else {
      navigate('/login');
    }
  }, [navigate]);

  // 현재 페이지에 맞는 농지 리스트를 반환
  const lastIndex = currentPage * pageSize;
  const firstIndex = lastIndex - pageSize;
  const currentItems = logs.slice(firstIndex, lastIndex);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(logs.length / pageSize);

  // 표시할 페이지 범위 계산
  const startPage = Math.floor((currentPage - 1) / pageCount) * pageCount + 1;
  const endPage = Math.min(startPage + pageCount - 1, totalPages);

  // 페이지 변경 핸들러
  const changePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // 농지 선택 시 해당 farm_id localStorage에 저장
  const handleFarmDetail = (farmId) => {
    localStorage.setItem('selectedFarmId', farmId);
    navigate(`/detail/${farmId}`);
  };

  // 농지 상세페이지로 이동
  const handleDetailPage = (farmId) => {
    localStorage.setItem('selectedFarmId', farmId);
    navigate(`/detailadmin/${farmId}`);
  }

  // 임대 신청 버튼 허가
  const handleApproveRent = async (farmId, userId) => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await approveRent(farmId, userId, token);
        alert('임대 신청이 허가되었습니다.');
        window.location.reload();
      } catch (error) {
        console.log('임대 신청 허가 오류', error);
      }
    } else {
      navigate('/mypage/admin');
    }
  }

  // 임대 신청 버튼 거절
  const handleRefuseRent = async (farmId, userId) => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await refuseRent(farmId, userId, token);
        window.location.reload();
      } catch (error) {
        console.log('임대 신청 거절 오류', error);
      }
    } else {
      navigate('/mypage/admin');
    }
  }

  // 날짜 및 시간 포맷팅 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <div className="page">
      <Navbar />
      <div className='mypage'>
        <div className="amypage-container">
          <div className="amypage-title">농지 임대 신청 리스트</div>
          {/* <div className="button-container">
            <button onClick={() => handleDetailPage(farm.farm_id)} className="detailBtn">상세페이지</button>
            <button onClick={() => handleApproveRent(farm.farm_id, farm.user_id)} className="rentBtn">임대 허가</button>
            <button onClick={() => handleRefuseRent(farm.farm_id, farm.user_id)} className="rejectBtn">임대 거절</button>
          </div> */}
          <table className="mypage-info">
            <thead>
              <tr>
                {/* <th className='check-column'></th> */}
                <th className='no-column'>No</th>
                <th className="time-column">임대 신청 시간</th>
                <th className="num-column">농지 번호</th>
                <th className="name-column">농지명</th>
                <th className="status-column">농지 상태</th>
                <th className="me-column">임대 신청인</th>
                <th className="management-column">관리</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((farm, index) => (
                  <tr key={index}>
                    {/* <td className='check-column'><input type="checkbox" /></td> */}
                    <td className='no-column'>
                      <div className='No'>{logs.length - (firstIndex + index)}</div>
                    </td>
                    <td className="time-column">{formatDate(farm.farm_created)}</td>
                    <td className="num-column">{farm.farm_id}</td>
                    <td className="name-column">{farm.farm_name}</td>
                    <td className="status-column">{getStatusText(farm.farm_status)}</td>
                    <td className="me-column">{farm.user_id}</td>
                    <td className="management-column">
                      {/* <button onClick={() => handleDetailPage(farm.farm_id)} className="detailBtn">상세페이지</button> */}
                      <button onClick={() => handleApproveRent(farm.farm_id, farm.user_id)} className="rentBtn">임대 허가</button>
                      <button onClick={() => handleRefuseRent(farm.farm_id, farm.user_id)} className="rejectBtn">임대 거절</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="no-farms">임대 신청된 농지가 없습니다.</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className='pagination-container'>
            <div className="pagination">
              <button onClick={() => changePage(1)} disabled={currentPage === 1}>{"<<"}</button>
              <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>{"<"}</button>
              {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(number => (
                <button 
                  key={number} 
                  onClick={() => changePage(number)} 
                  className={number === currentPage ? 'active' : ''}
                >
                  {number}
                </button>
              ))}
              <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>{">"}</button>
              <button onClick={() => changePage(totalPages)} disabled={currentPage === totalPages}>{">>"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMyPage;
