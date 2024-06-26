import React from 'react';
import Navbar from '../navbar/navbar'; // 경로 수정

const HeroSection = () => (
  <section className="hero-section">
    <h1>NongBu<br />New Options, New Generation By Unity</h1>
  </section>
);

const SearchSection = () => (
  <section className="search-section">
    <input type="text" placeholder="검색어를 입력해 주세요." />
  </section>
);

const VideoSection = () => (
  <section className="video-section">
    <h2>공식 영상</h2>
    <div className="video-container">
      {/* YouTube video embed code:
      <iframe 
          src="https://www.youtube.com/embed/VIDEO_ID" 
      ></iframe>
      */}
    </div>
  </section>
);

const ServiceIntroduction = () => (
  <section className="service-introduction">
    <h3>서비스 소개</h3>
    <p>농촌 지역 인구 고령화와 도시화로 인해 사용되지 않는 농지가 증가하고 있습니다.<br />NongBu 서비스는 AI 기술을 이용하여 농업에서 사용되지 않거나 활용되지 않는 땅을 감지해 내고, 임대할 수 있도록 도와줍니다.</p>
    <p>AI 활용 농지 조사 시스템은 첨단 AI 기술로 저활용 농지를 탐지하여 임대 서비스를 제공합니다.<br />청년 농업인들이 쉽게 농업을 시작하고, 정부는 사용되지 않는 농지를 효율적으로 활용할 수 있도록 지원합니다.</p>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>© KT AILVE 20조 농지탐정단 ALL RIGHTS RESERVED.</p>
  </footer>
);

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <SearchSection />
        <VideoSection />
        <ServiceIntroduction />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
