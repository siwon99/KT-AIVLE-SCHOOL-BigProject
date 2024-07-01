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

const TeamMessage = () => {
  return (
    <div>
      <div className="title">
        <h3>농업이 미래를 구한다</h3>
      </div>
      <div className="intro-text">
        <p>안녕하세요. 저희는 충남/충북의 xx조입니다. 청년 농부들의 힘찬 미래를 위해</p>
        <p>정부가 청년들의 가장 큰 고민인 자본 문제를 해결하고자 프로젝트를 시작하게 되었습니다.</p>
        <p>안녕하세요. 저희는 충남/충북의 xx조입니다. 청년 농부들의 힘찬 미래를 위해</p>
        <p>정부가 청년들의 가장 큰 고민인 자본 문제를 해결하고자 프로젝트를 시작하게 되었습니다.</p>
        <p>안녕하세요. 저희는 충남/충북의 xx조입니다. 청년 농부들의 힘찬 미래를 위해</p>
        <p>정부가 청년들의 가장 큰 고민인 자본 문제를 해결하고자 프로젝트를 시작하게 되었습니다.</p>
        <p>안녕하세요. 저희는 충남/충북의 xx조입니다. 청년 농부들의 힘찬 미래를 위해</p>
        <p>정부가 청년들의 가장 큰 고민인 자본 문제를 해결하고자 프로젝트를 시작하게 되었습니다.</p>
        <p>안녕하세요. 저희는 충남/충북의 xx조입니다. 청년 농부들의 힘찬 미래를 위해</p>
        <p>정부가 청년들의 가장 큰 고민인 자본 문제를 해결하고자 프로젝트를 시작하게 되었습니다.</p>
      </div>
    </div>
  );
};

export { TeamInfo, TeamMessage };
