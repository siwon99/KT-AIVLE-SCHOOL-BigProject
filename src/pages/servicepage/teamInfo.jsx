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

export { TeamInfo, TeamIntro };
