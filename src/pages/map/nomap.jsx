import React from 'react';
import Navbar from '../navbar/navbar.jsx';
import './map.css'

export const Session = () => {
  return (
    <>
      <Navbar />
      <div className='nomap-page'>
          <div>
						모바일에서 확인이 불가합니다. <br /> PC로 접속해주세요.
					</div>
      </div>
			
    </>
  )
}

export default Session;