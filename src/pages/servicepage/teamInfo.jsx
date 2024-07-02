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
    <TeamIntro />
    <div className='teammate'>
      <div className='row-5'>
        <ul>
          {sortedMembers.slice(0, 5).map((member, index) => (
            <li key={index} className={`member member-${index}`}>
              <div className="profile-pic">
                <img src={`/assets/${member.name}.jpg`} alt={member.name} />
              </div>
              <p>{member.name} <br /> {member.role}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className='row-4'>
        <ul>
          {sortedMembers.slice(5).map((member, index) => (
            <li key={index} className={`member member-${index}`}>
              <div className="profile-pic">
                <img src={`/assets/${member.name}.jpg`} alt={member.name} />
              </div>
              <p>{member.name} <br /> {member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const TeamIntro = () => (
  <div className="team-name">조 이름: 농지탐정단</div>
);

export { TeamInfo, TeamIntro };
