import React from 'react';
import Navbar from '../navbar/navbar';
import SlideBanner from './slidebanner';
import "./service.css";
import serviceFlowImage from '/assets/serviceflow.webp';

// 섹션 타이틀 컴포넌트
const SectionTitle = ({ title }) => (
  <div className="section-title">
    {title}
    <div className="underline"></div>
  </div>
);

// 문단 리스트 컴포넌트
const ParagraphList = ({ items }) => (
  <div className="paragraph-list">
    {items.map((item, index) => (
      <p key={index} className="paragraph-item">
        <span className="paragraph-number">{index + 1}.</span> {item}
      </p>
    ))}
  </div>
);

// 서비스 소개 컴포넌트
const ServiceIntro = () => {
  // 소개 문단 목록
  const introItems = [
    "NONGBU는 AI를 활용하여 농업에 사용하지 않거나 저활용된 땅을 감지하고 임대할 수 있도록 합니다. 이를 통해 농업 생산성을 높이고, 지역 경제를 활성화할 수 있습니다.",
    "농촌 지역의 인구 고령화와 도시화로 인해 사용되지 않는 농지가 증가하고 있습니다. NONGBU는 이러한 문제를 해결하기 위해 첨단 기술을 사용하여 저활용 농지를 효율적으로 탐지하고 관리합니다.",
    "비효율적으로 사용되는 농지를 매입하여 청년 농업 인재들에게 제공함으로써, 지역 농업의 지속 가능성을 높이고, 젊은 세대가 농업에 쉽게 접근할 수 있도록 지원합니다.",
    "NONGBU의 목표는 농업을 혁신하고, 지속 가능한 발전을 이루는 것입니다."
  ];

  // 주요 기능 문단 목록
  const featuresItems = [
    "저활용 농지 탐지: AI 기술을 활용하여 사용되지 않거나 저활용된 농지를 정확하게 파악합니다.",
    "농지 임대 서비스: 탐지된 농지를 필요한 농업 인재들에게 임대하여 생산성을 높입니다.",
    "데이터 시각화 및 관리: 농지 데이터를 시각화하고 효율적으로 관리할 수 있는 도구를 제공합니다. 이를 통해 농업 인재들이 쉽게 농지 정보를 파악하고 활용할 수 있습니다.",
    "실시간 모니터링: 농지 상태를 실시간으로 모니터링하여 필요한 조치를 적시에 취할 수 있습니다."
  ];

  // 기대 효과 문단 목록
  const effectsItems = [
    "사용되지 않는 농지를 매입하여 청년 농업 인재들에게 제공함으로써, 지역 농업의 지속 가능성을 높이고, 젊은 세대가 농업에 참여할 수 있는 기회를 제공합니다.",
    "정부를 통한 청년 농부들의 농지 마련을 지원하여, 초기 자본 부족 문제를 해결합니다. 따라서 청년들이 농업을 시작하는 데 필요한 지원을 받을 수 있습니다.",
    "지역의 농지 활용을 통해 지역사회의 활력을 증진시킵니다. 이는 농업 생산성을 높이고, 지역 경제를 활성화하는 데 기여합니다.",
    "농업 기술의 발전과 지속 가능한 농업 모델 구축을 통해 환경 보호와 경제적 성장을 동시에 추구합니다."
  ];

  // 기술 스택 목록
  const techStack = [
    { label: "Frontend", text: "React, CSS" },
    { label: "Backend", text: "Django" },
    { label: "Database", text: "SQLite" },
    { label: "Infrastructure", text: "AWS EC2 for hosting, S3 for storage" },
    { label: "Mapping", text: "Kakao Map, Naver Map" },
    { label: "AI Model", text: "YOLO for object detection" },
    { label: "Proxy Server", text: "Nginx" }
  ];

  return (
    <div className='info-section'>
      <SectionTitle title="서비스 소개" />
      <div className='subtitle'>&ldquo;농업이 미래를 구한다&rdquo;</div>
      <ParagraphList items={introItems} />

      <SectionTitle title="주요 기능" />
      <SlideBanner /> {/* 슬라이드 배너 추가 */}
      <ParagraphList items={featuresItems} />

      <SectionTitle title="기대 효과" />
      <ParagraphList items={effectsItems} />

      <SectionTitle title="기술 스택" />
      <img src={serviceFlowImage} alt="Service Flow" className="service-flow-image" />
      <div className="tech-stack">
        {techStack.map((item, index) => (
          <p key={index} className="tech-item">
            <span className="label">{item.label}:</span> {item.text}
          </p>
        ))}
      </div>
    </div>
  );
};

// 서비스 페이지 컴포넌트
const ServicePage = () => {
  return (
    <div className="page">
      <Navbar />
      <main className="content-container">
        <ServiceIntro />
      </main>
    </div>
  );
};

export default ServicePage;
