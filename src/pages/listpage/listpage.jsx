import React from 'react'; // eslint-disable-line no-unused-vars
import Navbar from '../navbar/navbar'; // navbar.jsx 파일 임포트

const ListPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>토지 리스트</h1>
        <div>
          <ul>
            <li>
              <span>No.1</span>
              <span>[대전] 탄방동 100cm^2 농지</span>
              <button>선택</button>
            </li>
            <li>
              <span>No.2</span>
              <span>[대전] 유성구 1000cm^2 농지</span>
              <button>선택</button>
            </li>
            <li>
              <span>No.3</span>
              <span>[천안] 두정동 500cm^2 농지</span>
              <button>선택</button>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ListPage;
