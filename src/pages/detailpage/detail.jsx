import React from 'react';
import Navbar from '../navbar/navbar';

// 상세 정보 페이지
const DetailPage = () => {
  return (
    <>
      <Navbar />
      <div className="detail-info">
        <div className="title">농지 상세정보</div>

        <div className='details'>
          <span className="info">농지 소유자</span> 
          <span className="info">위도/경도</span> 
          <span className="info">날짜</span>
          <span className="info">운영 상태</span>
        </div>

        <div className="btn">
          <button className="backBtn">이전</button>
          <button className="rentBtn">임대</button>
        </div>
      </div>

      <div className="map"></div>
    </>
  );
};

export default DetailPage;
