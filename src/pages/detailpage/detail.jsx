import React from 'react';
import Navbar from '../navbar/navbar';

// 상세 정보 페이지
const DetailPage = () => {
  return (
    <div className="detail">
      {/* 네비게이션바 */}
      <Navbar /> {/* 상단 네비게이션바 */}

      {/* 상세 정보 컨테이너 */}
      <div className="detail-container">
        {/* 제목 */}
        <h2 className="detail-title">농지 상세정보</h2>

        {/* 농지 정보 */}
        <div className="detail-info">
          <strong className="detail-label">farm_owner:</strong> <span className="detail-value">땅 주인</span> {/* 땅 주인 정보 */}
        </div>
        <div className="detail-info">
          <span className="detail-label">위도/경도:</span> <span className="detail-value">위도/경도 값</span> {/* 위도와 경도 정보 */}
        </div>
        <div className="detail-info">
          <strong className="detail-label">farm_created:</strong> <span className="detail-value">날짜</span> {/* 농지 생성 날짜 */}
        </div>
        <div className="detail-info">
          <strong className="detail-label">farm_status:</strong> <span className="detail-value">운영 상태</span> {/* 농지 운영 상태 */}
        </div>

        {/* 버튼들 */}
        <div className="buttons">
          <button className="btn back-btn">이전</button> {/* 이전 버튼 */}
          <button className="btn rent-btn">임대</button> {/* 임대 버튼 */}
        </div>
      </div>

      {/* 지도 이미지 */}
      <div className="map">
        <img src="/images/image.png" alt="Map" className="map-img" /> {/* 농지 위치를 보여주는 지도 이미지 */}
      </div>
    </div>
  );
};

export default DetailPage;
