import React from 'react'; // eslint-disable-line no-unused-vars

const teamMembers = [
  { name: '강병관', role: 'BE' },
  { name: '권혜민', role: 'FE' },
  { name: '김시원', role: 'FE' },
  { name: '이건우', role: 'FE' },
  { name: '김찬희', role: 'BE' },
  { name: '송유경', role: 'BE' },
  { name: '문주원', role: 'AI' },
  { name: '진희원', role: 'AI' },
  { name: '한덕구', role: 'AI' },
];

const sortedMembers = teamMembers
  .filter(member => member.name !== '강병관')
  .sort((a, b) => a.name.localeCompare(b.name));

const groupedMembers = [
  { name: '강병관', role: 'BE' },
  ...sortedMembers.filter(member => member.role === 'BE'),
  ...sortedMembers.filter(member => member.role === 'FE'),
  ...sortedMembers.filter(member => member.role === 'AI')
];

const TeamInfo = () => {
  return (
    <div className='team-info'>
      <div className='title'>서비스 소개</div>
      <div className='teammate'>
        <ul>
          {groupedMembers.map((member, index) => (
            <li key={index} className={`member member-${index}`}>
              <div className="profile-pic">
                {/* 나중에 assets에서 프로필 사진을 첨부할 예정 */}
                <img src={`/assets/${member.name}.jpg`} alt={member.name} />
              </div>
              <p>{member.name} <br /> {member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const TeamIntro = () => {
  return (
    <div className="team-name">
      <h3>조 이름: 농지탐정단</h3>
      <p>농 지의 비밀을 밝히기 위해</p>
      <p>지 혜로운 탐정들이 모였다</p>
      <p>탐 정단의 임무는 명확하다</p>
      <p>정 밀하게 조사하고</p>
      <p>단 서를 찾아내 해결한다</p>
    </div>
  );
};

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

export { TeamInfo, ServiceIntro, TeamIntro };
