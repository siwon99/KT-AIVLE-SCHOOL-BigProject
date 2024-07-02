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

const sortedMembers = teamMembers.sort((a, b) => a.name.localeCompare(b.name));

const TeamInfo = () => (
  <div className='team-info'>
    <div className='title'>서비스 소개</div>
    <div className='teammate'>
      <ul>
        {sortedMembers.map((member, index) => (
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

const TeamIntro = () => (
  <div className="team-name">
    <h3>조 이름: 농지탐정단</h3>
  </div>
);

export { TeamInfo, TeamIntro };
