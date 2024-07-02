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
      <div className="intro">
        <h4>서비스 소개</h4>
        <p>NONGBU는 AI 기술을 활용하여 농업에서 사용되지 않거나 저활용된 땅을 감지하고 임대할 수 있도록 돕습니다.</p>
        <p>사용되지 않는 농지를 매입하여 청년 농업 인재들에게 제공함으로써 지역 농업의 지속 가능성을 증대시키고 있습니다.</p>
      </div>
      <div className="features">
        <h4>주요 기능</h4>
        <p>저활용 농지 탐지</p>
        <p>농지 임대 서비스</p>
        <p>데이터 시각화 및 관리</p>
      </div>
      <div className="effects">
        <h4>기대 효과</h4>
        <p>사용되지 않는 농지를 매입하여 청년 농업 인재들에게 제공함으로써, 지역 농업의 지속 가능성 증대</p>
        <p>정부를 통한 청년 농부들의 자본(땅) 마련</p>
        <p>고령 인구가 많은 지역에서의 농지 활용을 통해 지역사회의 활력 증진</p>
      </div>
    </div>
  );
};

const ServicePage = () => {
  return (
    <div className="page">
      <Navbar />
      <main className="contents">
        <TeamInfo />
        <TeamIntro />
        <ServiceIntro />
      </main>
    </div>
  );
};

export default ServicePage;
