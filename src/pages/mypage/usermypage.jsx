import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar.jsx';
import { getUserMypage } from '../../service/apiService.js';
import './usermypage.css'

const UserMyPage = () => {
	const navigate = useNavigate();
	const [logs, setLogs] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 5; // 한 페이지에 나열할 목록 수
	const pageCount = 5; // 표시할 페이지 번호 갯수

	useEffect(() => {
		const token = localStorage.getItem('token');
		
		if (token) {
			getUserMypage(token)
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
	
	// 페이지네이션 버튼 렌더링 함수
	const Pagination = (page, symbol, isDisabled) => (
		<button onClick={() => changePage(page)} disabled={isDisabled}>
			{symbol}
		</button>
	);
	
	// 농지 선택 시 해당 farm_id localStorage에 저장
	const handleFarmDetail = (farmId) => {
		localStorage.setItem('selectedFarmId', farmId);
		navigate(`/detail/${farmId}`);
	};

	// 날짜 및 시간 포맷팅 함수
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');
		let hours = date.getHours();
		const minutes = String(date.getMinutes()).padStart(2, '0');
		const period = hours >= 12 ? '오후' : '오전';
		hours = hours % 12 || 12;
		return `${year}년 ${month}월 ${day}일 ${period} ${hours}:${minutes}`;
	};


	return (
    <div className="page">
      {/* <Navbar /> */}
      <div className='listpage'>
        <div className="lists-container">
          <div className="title">농지 임대 신청 리스트</div>

          <div className='lists-info'>
            {currentItems.length > 0 ? (
              currentItems.map((farm, index) => (
                <div className='lists' key={index}>
                  <div className='farmsign-info'>
                    <div className='num'>{logs.length - (firstIndex + index)}.</div>
                    <div key={index} className='admin-mypage-content'>
                      <div className="farmsign-date"> 농지 등록 날짜: {formatDate(farm.farm_created)} </div>
                      <div className="farmsign-id"> 농지 아이디: {farm.farm_id} </div>
                      <div className="farmsign-name"> 농지명: {farm.farm_name} </div>
                      <div className="farmsign-status"> 농지 현재 상태: {farm.farm_status} </div>
                      <div className="farmsign-logID"> 농지 상태 기록: {farm.farm_status_log_id} </div>
                      <div className="farmsign-user"> 임대 신청인: {farm.user_id} </div>
                    </div>
                    <button onClick={() => handleFarmDetail(farm.farm_id)} className="choiceBtn">선택</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-farms">임대 신청된 농지가 없습니다.</p>
            )}
          </div>

          <div className='pagination-container'>
            <div className="pagination">
              {Pagination(1, "<<", currentPage === 1)}
              {Pagination(currentPage - 1, "<", currentPage === 1)}
              {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(number => (
                <button 
                  key={number} 
                  onClick={() => changePage(number)} 
                  className={number === currentPage ? 'active' : ''}
                >
                  {number}
                </button>
              ))}
              {Pagination(currentPage + 1, ">", currentPage === totalPages)}
              {Pagination(totalPages, ">>", currentPage === totalPages)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMyPage;