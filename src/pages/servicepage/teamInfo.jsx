import React from 'react'; // eslint-disable-line no-unused-vars
import Navbar from '../navbar/navbar';
import './teamInfo.css';

const teamMembers = [
  { name: '강병관', role: 'BE', image: '/src/assets/강병관.webp' },
  { name: '권혜민', role: 'FE', image: '/src/assets/권혜민.webp' },
  { name: '김시원', role: 'FE', image: '/src/assets/김시원.webp' },
  { name: '이건우', role: 'FE', image: '/src/assets/이건우.webp' },
  { name: '김찬희', role: 'BE', image: '/src/assets/김찬희.webp' },
  { name: '송유경', role: 'BE', image: '/src/assets/송유경.webp' },
  { name: '문주원', role: 'AI', image: '/src/assets/문주원.webp' },
  { name: '진희원', role: 'AI', image: '/src/assets/진희원.webp' },
  { name: '한덕구', role: 'AI', image: '/src/assets/한덕구.webp' },
];

const sortedMembers = teamMembers.sort((a, b) => a.name.localeCompare(b.name));

const TeamInfo = () => {
  return (
    <div className="page">
      <Navbar />
      <div className='team-contents'>
        <div className='team-info'>
          <div className='team-title'>조원 소개</div>
          <div className='teammate'>
            <div className='row-5'>
              <ul>
                {sortedMembers.slice(0, 5).map((member, index) => (
                  <li key={index} className={`member member-${index}`}>
                    <div className="profile-pic">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <p>{member.name} <br /> {member.role}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className='row-4'>
              <ul>
                {sortedMembers.slice(5).map((member, index) => (
                  <li key={index + 5} className={`member member-${index + 5}`}>
                    <div className="profile-pic">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <p>{member.name} <br /> {member.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamInfo;