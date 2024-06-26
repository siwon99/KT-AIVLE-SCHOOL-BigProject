import React, { useState } from 'react' // eslint-disable-line no-unused-vars
import { useNavigate } from 'react-router-dom';
import UserBtn from './UserBtn.jsx'
import UserInput from './UserInput.jsx'
import Navbar from '../navbar/navbar.jsx';

const Login = () => {
  //유저 id, password
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });
 
  //아이디, 비밀번호
  const handleInputChange = event => {
    const {name, value} = event.target;
    setUserInfo(userInfo => ({
      ...userInfo,
      [name]: value,
    }));
  };

  //페이지 이동
  const navigate = useNavigate();

  //회원가입 페이지 이동
  const goSignupPage = () => {
    navigate('/signup');
  };

  //로그인 버튼 클릭시 메인 페이지로 이동
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
      console.log(data.token)
      if (data.token) {
        alert('로그인 되었습니다.');
        localStorage.setItem('token', data.message);
        navigate('/');
      } else {
        console.log('username:' ,userInfo.username, 'password:', userInfo.password);
        alert('가입되지 않은 정보입니다.');
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="userFrame" onChange={handleInputChange}>
          <UserInput
            type="text"
            placeholder="아이디를 입력하세요."
            value={userInfo.username}
            name="username"
          />
          <UserInput
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={userInfo.password}
            name="password"
          />
          <UserBtn
            text="로그인"
            onClick={loginProgcess}
          />
          <div className="buttonWrapper">
            <button className="actionButton" onClick={goSignupPage}>
              회원 가입
            </button>
            <div className="wall">|</div>
            <button className="actionButton">비밀번호 찾기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login