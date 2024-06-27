import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트
import Navbar from '../navbar/navbar'; // navbar.jsx 파일 임포트

// 토지 리스트 컴포넌트 정의
// 추후 map() 방식으로 코드 최적화 예정
const ListPage = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleSelect = () => {
    navigate('/detail');
  };

  return (
    <div className="lp">
      <Navbar />
      <main className="lp-main">
        <h1 className="lp-title">토지 리스트</h1>
        <div className="lp-container">
          <ul className="lp-list">
            <li className="lp-item">
              <span className="lp-no">No.1</span>
              <span className="lp-desc">[대전] 탄방동 100cm^2 농지</span>
              <button className="lp-btn" onClick={handleSelect}>선택</button>
            </li>
            <li className="lp-item">
              <span className="lp-no">No.2</span>
              <span className="lp-desc">[대전] 유성구 1000cm^2 농지</span>
              <button className="lp-btn" onClick={handleSelect}>선택</button>
            </li>
            <li className="lp-item">
              <span className="lp-no">No.3</span>
              <span className="lp-desc">[천안] 두정동 500cm^2 농지</span>
              <button className="lp-btn" onClick={handleSelect}>선택</button>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ListPage;
