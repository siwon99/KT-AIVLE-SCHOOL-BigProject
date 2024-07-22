import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar.jsx';
import { getUserMypage } from '../../service/apiService.js';
import './usermypage.css'

const UserMyPage = () => {
	const navigate = useNavigate();
	const [logs, setLogs] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 7; // 한 페이지에 나열할 목록 수
	const pageCount = 5; // 표시할 페이지 번호 갯수

  const getStatusText = (status) => {
    switch (status) {
      case 0:
        return '분양 완료';
      case 1:
        return '승인 거절';
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
	// const handleFarmDetail = (farmId) => {
	// 	localStorage.setItem('selectedFarmId', farmId);
	// 	navigate(`/detail/${farmId}`);
	// };

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
			<Navbar />
			<div className='mypage'>
				<div className="umypage-container">
					<div className="umypage-title">농지 임대 신청 리스트</div>
					<table className="mypage-info">
						<thead>
							<tr>
                <th className='no-column'>No</th>
								<th className="time-column">임대 신청 시간</th>
								<th className="num-column">농지 번호</th>
								<th className="name-column">농지명</th>
								<th className="status-column">농지 상태</th>
								{/* <th className="me-column">임대 신청인</th> */}
							</tr>
						</thead>
						<tbody>
							{currentItems.length > 0 ? (
								currentItems.map((farm, index) => (
									<tr key={index}>
										<td className='no-column'>
											<div className='No'>{logs.length - (firstIndex + index)}</div>
										</td>
										<td className="time-column">{formatDate(farm.farm_created)}</td>
										<td className="num-column">{farm.farm_id}</td>
										<td className="name-column">{farm.farm_name}</td>
										<td className="status-column">{getStatusText(farm.farm_status)}</td>
										{/* <td className="me-column">{farm.user_id}</td> */}
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