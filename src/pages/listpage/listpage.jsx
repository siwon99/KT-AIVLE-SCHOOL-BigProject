import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';
 
// 토지 리스트 컴포넌트 정의
// 추후 map() 방식으로 코드 최적화 예정
const ListPage = () => {
  const navigate = useNavigate();
 
  const handleSelect = () => {
    navigate('/detail');
  };
 
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="title">토지 리스트</div>

        <div className="list-info">
          <ul className="farms">
            <li className="farm-item">
              <span className="number">No.1</span>
              <span className="description">[대전] 탄방동 100cm^2 농지</span>
              <button className="button" onClick={handleSelect}>선택</button>
            </li>
          </ul>
        </div>

      </div>
    </>
  );
};
 
export default ListPage;