import React from 'react'; // eslint-disable-line no-unused-vars
import Navbar from '../navbar/navbar';
import './service.css';

const teamMembers = [
  { name: '강병관', role: 'BE', image: '/src/assets/강병관.png' },
  { name: '권혜민', role: 'FE', image: '/src/assets/.png' },
  { name: '김시원', role: 'FE', image: '/src/assets/김시원.png' },
  { name: '이건우', role: 'FE', image: '/src/assets/이건우.png' },
  { name: '김찬희', role: 'BE', image: '/src/assets/김찬희.png' },
  { name: '송유경', role: 'BE', image: '/src/assets/송유경.png' },
  { name: '문주원', role: 'AI', image: '/src/assets/.png' },
  { name: '진희원', role: 'AI', image: '/src/assets/진희원.png' },
  { name: '한덕구', role: 'AI', image: '/src/assets/한덕구.png' },
];

const sortedMembers = teamMembers.sort((a, b) => a.name.localeCompare(b.name));

const TeamInfo = () => {
  return (
    <>
      <Navbar />
      <div className='team-info'>
        <div className='title'>조원 소개</div>
        <div className='teammate'>

          <div className='row-5'>
            <ul>
              {sortedMembers.slice(0, 5)
              .map((member, index) => (
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
              {sortedMembers.slice(5)
              .map((member, index) => (
                <li key={index} className={`member member-${index + 5}`}>
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
    </>
  );
}

export default TeamInfo;
