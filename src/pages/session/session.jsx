import React from 'react';
import Navbar from '../navbar/navbar.jsx';
import './session.css'

export const Session = () => {
  return (
    <>
      <Navbar />
      <div className='session-page'>
          <div>
						세션이 만료되었습니다. <br />다시 로그인 해주세요.
					</div>
					<a href='/login' className='session-login'>로그인</a>
      </div>
			
    </>
  )
}

export default Session;