// TeamInfo.jsx
import React from 'react'; // eslint-disable-line no-unused-vars

const teamMembers = [
  { name: '강병관', role: '총괄감독' },
  { name: '권혜민', role: 'FE' },
  { name: '김시원', role: 'FE' },
  { name: '김찬희', role: 'BE' },
  { name: '문주원', role: '데이터' },
  { name: '송유경', role: 'BE' },
  { name: '이건우', role: 'FE' },
  { name: '진희원', role: '데이터' },
  { name: '한덕구', role: '데이터' },
];

const TeamInfo = () => {
  return (
    <div className='team-info'>
      <div className='title'>서비스 소개</div>
      <div className='teammate'>
        <ul>
          {teamMembers.map((member, index) => (
            <li key={index}>
              <p>{member.name} <br /> {member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamInfo;
