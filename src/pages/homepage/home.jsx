import React, { useState } from 'react'; // useState: 모달 열림상태 관리
import "./home.css";
import Navbar from '../navbar/navbar.jsx';
import Search from './Search.jsx';
import WchatBot from "../../assets/WchatBot.svg"; // 권혜민 추가
import ChatBot from './ChatBot.jsx'; // 이건우 추가

// 메인 페이지 문구
const MainText = () => (
  <section className="maintext">
    <h1>NONGBU<br />Next Our New Generation, Better then Us</h1>
  </section>
);

// 메인 페이지 유튜브
const Youtube = ({ onChatBotClick }) => (
  <section className="youtube-container">
    <div className="youtube">
      <iframe
        src="https://www.youtube.com/embed/Ktvni0-igZQ"
        title="New Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
    <div className="chatbot" onClick={onChatBotClick}>
      <img src={WchatBot} alt="chatbot" />
    </div>
  </section>
);

// 메인 페이지 서비스 소개
const ServiceIntroduction = () => (
  <section className="service-intro">
    <h3>NONGBU란?</h3>
    <p>농촌 지역의 인구 고령화와 도시화로 인해 사용되지 않는 농지가 증가하고 있습니다.<br />NONGBU는 AI 기반 농지 조사 시스템으로 저활용 농지를 파악하여 임대 서비스를 제공합니다.</p>
    <p>이를 통해 청년 농업인들은 농지를 임대하여 활용하고 정부는 비활용 농지를 효율적으로 활용할 수 있습니다.</p>
    <p>정부와 함께 농업의 미래를 만들어 가는 길!<br />지금 시작하세요.</p>
  </section>
);

// 메인 페이지 푸터
const Footer = () => (
  <footer className="footer">
    <p>대전 서구 문정로48번길 30(KT 탄방타워) 13층 교육장</p>
    <p>ⓒ 2024 20조. ALL RIGHTS RESERVED.</p>
  </footer>
);

// 챗봇 이미지 클릭 시 모달 열고 닫기
const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChatBotClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home">
      <Navbar />
      <main className="content">
        <MainText />
        <Search />
        <Youtube onChatBotClick={handleChatBotClick} />
        <ServiceIntroduction />
        <Footer />
      </main>
      {isModalOpen && <ChatBot closeModal={closeModal} />}
    </div>
  );
};

export default HomePage;
