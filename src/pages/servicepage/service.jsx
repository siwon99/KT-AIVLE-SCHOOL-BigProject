import React from 'react'; // eslint-disable-line no-unused-vars
import Navbar from '../navbar/navbar'; // navbar.jsx 파일 임포트

// ServicePage 컴포넌트 정의
const ServicePage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>서비스 소개</h1>
        <div>
          <ul>
            {Array(9).fill().map((_, index) => (
              <li key={index}>
                <p>강병관<br />총괄감독</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ServicePage;
