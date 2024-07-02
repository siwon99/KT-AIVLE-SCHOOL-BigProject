import React from 'react'; // eslint-disable-line no-unused-vars
import Navbar from '../navbar/navbar';
import { TeamInfo, TeamIntro } from './teamInfo';
import "./service.css";

const ServiceIntro = () => {
  return (
    <div>
      <div className="title">
        <h3>농업이 미래를 구한다</h3>
      </div>
      <div className="intro-text">
        <p>서비스 소개</p>
        <p>농촌 지역 인구 고령화와 도시화로 인해 사용되지 않는 농지가 증가하고 있습니다.</p>
        <p>NongBu 서비스는 AI 기술을 이용하여 농업에서 사용되지 않거나 활용되지 않는 땅을 감지해 내고, 임대할 수 있도록 도와줍니다.</p>
        <p>사용되지 않는 농지를 매입하여 청년 농업 인재들에게 제공함으로써, 지역 농업의 지속 가능성을 증대시키고 있습니다.</p>
        <p>정부를 통한 청년 농부들의 자본(땅) 마련을 지원합니다.</p>
        <p>고령 인구가 많은 지역에서의 농지 활용을 통해 지역사회의 활력을 증진시킵니다.</p>
        <p>AI 활용 농지 조사 시스템은 첨단 AI 기술로 저활용 농지를 탐지하여 임대 서비스를 제공합니다.</p>
        <p>청년 농업인들이 쉽게 농업을 시작하고, 정부는 사용되지 않는 농지를 효율적으로 활용할 수 있도록 지원합니다.</p>
        <p>주요 기능</p>
        <p>저활용 농지 탐지</p>
        <p>농지 임대 서비스</p>
        <p>데이터 시각화 및 관리</p>
      </div>
    </div>
  );
};

const ServicePage = () => {
  return (
    <>
      <Navbar />
      <main className="contents">
        <TeamInfo />
        <TeamIntro />
        <ServiceIntro />
      </main>
    </>
  );
};

export default ServicePage;
