// Login.jsx

import React, { useState } from 'react';
import "./login.css";
import { useNavigate } from 'react-router-dom';
import UserBtn from './UserBtn.jsx';
import UserInput from './UserInput.jsx';
import Navbar from '../navbar/navbar.jsx';

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserInfo(userInfo => ({
      ...userInfo,
      [name]: value,
    }));
  };

  const goSignupPage = () => {
    navigate('/signup');
  };

  const loginProgcess = () => {
    fetch('http://3.39.228.42/users/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          alert('로그인 되었습니다.');
          localStorage.setItem('token', data.token);
          navigate('/');
        } else {
          alert('가입되지 않은 정보입니다.');
        }
      });
  };

  const handleEnterPress = () => {
    loginProgcess(); // 엔터 키를 누를 때 로그인 처리 함수 호출
  };

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="userFrame">
          <UserInput
            type="text"
            placeholder="아이디를 입력하세요."
            value={userInfo.username}
            name="username"
            onChange={handleInputChange}
            onEnterPress={handleEnterPress} // 엔터 키 처리 함수 전달
          />
          <UserInput
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={userInfo.password}
            name="password"
            onChange={handleInputChange}
            onEnterPress={handleEnterPress} // 엔터 키 처리 함수 전달
          />
          <div className='Wrapper'>
            <UserBtn
              text="로그인"
              onClick={loginProgcess}
            />
            <button className="actionButton" onClick={goSignupPage}>
              회원 가입
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;