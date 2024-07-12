import React from 'react'; // eslint-disable-line no-unused-vars
import Navbar from '../navbar/navbar';
import "./service.css";

const ServiceIntro = () => {
  return (
    <div className='service-info'>
      <div className="title">서비스 소개</div>
      <div className="intro">
      <h2>{`'농업이 미래를 구한다'`}</h2>
        <p>1. NONGBU는 AI를 활용하여 농업에 사용하지 않거나 저활용된 땅을 감지하고 임대할 수 있도록 합니다.<br />이를 통해 농업 생산성을 높이고, 지역 경제를 활성화할 수 있습니다.</p>
        <p>2. 농촌 지역의 인구 고령화와 도시화로 인해 사용되지 않는 농지가 증가하고 있습니다.<br />NONGBU는 이러한 문제를 해결하기 위해 첨단 기술을 사용하여 저활용 농지를 효율적으로 탐지하고 관리합니다.</p>
        <p>3. 비효율적으로 사용되는 농지를 매입하여 청년 농업 인재들에게 제공함으로써,<br />지역 농업의 지속 가능성을 높이고, 젊은 세대가 농업에 쉽게 접근할 수 있도록 지원합니다.</p>
        <p>4. NONGBU의 목표는 농업을 혁신하고, 지속 가능한 발전을 이루는 것입니다.</p>
      </div>
      <div className="features">
        <h4>주요 기능</h4>
        <p>1. 저활용 농지 탐지: AI 기술을 활용하여 사용되지 않거나 저활용된 농지를 정확하게 파악합니다.</p>
        <p>2. 농지 임대 서비스: 탐지된 농지를 필요한 농업 인재들에게 임대하여 생산성을 높입니다.</p>
        <p>3. 데이터 시각화 및 관리: 농지 데이터를 시각화하고 효율적으로 관리할 수 있는 도구를 제공합니다.<br />이를 통해 농업 인재들이 쉽게 농지 정보를 파악하고 활용할 수 있습니다.</p>
        <p>4. 실시간 모니터링: 농지 상태를 실시간으로 모니터링하여 필요한 조치를 적시에 취할 수 있습니다.</p>
      </div>
      <div className="effects">
        <h4>기대 효과</h4>
        <p>1. 사용되지 않는 농지를 매입하여 청년 농업 인재들에게 제공함으로써,<br />지역 농업의 지속 가능성을 높이고, 젊은 세대가 농업에 참여할 수 있는 기회를 제공합니다.</p>
        <p>2. 정부를 통한 청년 농부들의 농지 마련을 지원하여, 초기 자본 부족 문제를 해결합니다.<br />따라서 청년들이 농업을 시작하는 데 필요한 지원을 받을 수 있습니다.</p>
        <p>3. 지역의 농지 활용을 통해 지역사회의 활력을 증진시킵니다.<br />이는 농업 생산성을 높이고, 지역 경제를 활성화하는 데 기여합니다.</p>
        <p>4. 농업 기술의 발전과 지속 가능한 농업 모델 구축을 통해 환경 보호와 경제적 성장을 동시에 추구합니다.</p>
      </div>
    </div>
  );
};

const ServicePage = () => {
  return (
    <div className="page">
      <Navbar />
      <main className="contents">
        <ServiceIntro />
      </main>
    </div>
  );
};

export default ServicePage;
