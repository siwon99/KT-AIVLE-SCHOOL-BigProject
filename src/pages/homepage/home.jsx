import React, { useEffect, useState } from 'react'; // useState: 모달 열림상태 관리
import "./home.css";
import Navbar from '../navbar/navbar.jsx';
import Search from './Search.jsx';
import WchatBot from "/assets/WchatBot.svg"
import ChatBot from './ChatBot.jsx'; // 이건우 추가

// 메인 페이지 문구
const MainText = () => {
  const [displayText, setDisplayText] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const fullText = 'Next Our New Generation, Better then Us';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setIsFinished(true);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="maintext">
      <p className='maintitle'>NONGBU</p>
      <p className='mainsub typed-text'>{displayText}</p>
    </section>
  );
};

// 메인 페이지 유튜브
const Youtube = () => (
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
  </section>
);

// 메인 페이지 서비스 소개
const ServiceIntroduction = () => (
  <section className="service-intro">
    <p className='introtitle'>NONGBU란?</p>
    <p className='introsub'>농촌 지역의 인구 고령화와 도시화로 사용되지 않는 농지가 증가하고 있습니다.<br/>
      NONGBU는 AI 기반 농지 조사 시스템으로 저활용 농지를 파악하여<br/> 청년 농업인에게 임대 서비스를 제공합니다.<br/>
      이를 통해 비활용 농지를 효율적으로 활용하고, 농업의 미래를 만들어갑니다.</p>
  </section>
);

// 메인 페이지 푸터
const Footer = () => (
  <footer className="footer">
    <p>대전 서구 문정로48번길 30(KT 탄방타워) 13층 교육장</p>
    <p>ⓒ 2024 20조. ALL RIGHTS RESERVED.</p>
    <a href='/privacyPolicy'>개인정보처리방침</a>
  </footer>
);

// 챗봇 이미지 클릭 시 모달 열고 닫기
const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToolTipOpen, setIsToolTipOpen] = useState(true);

  const openChatBot = () => {
    setIsModalOpen(true);
  };

  // 챗봇 옆 말풍선 닫기
  const closeToolTip = () => {
    setIsToolTipOpen(false);
  };

  return (
    <div className="home">
      <Navbar />
      <main className="content">
        <MainText />
        <Search />
        <ServiceIntroduction />
        <Youtube />
        <Footer />
      </main>
      {isModalOpen && <ChatBot closeModal={() => setIsModalOpen(false)} />}
      <div className="chatbot">
        <img src={WchatBot} alt="chatbot" onClick={openChatBot} />
        {/* 챗봇 옆 말풍선 추가 */}
        {isToolTipOpen && (
          <div className="chatBot-tooltip" id="chatBotToolTip">
            <button type="button" className="chatBot-tooltip-close" title="닫기" onClick={closeToolTip}>
              닫기
            </button>
            안녕하세요. 챗봇입니다.
            <br/> 
            챗봇 아이콘을 눌러 챗봇을 시작해주세요!
          </div>
        )}
      </div>
    </div>
  );
  
};

export default HomePage;
