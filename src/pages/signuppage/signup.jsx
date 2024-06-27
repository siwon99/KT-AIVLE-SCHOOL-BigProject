import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import { useNavigate } from 'react-router-dom';
import UserInput from '../loginpage/UserInput';
import UserButton from '../loginpage/UserBtn';
import Navbar from '../navbar/navbar';

const Signup = () => {
  // 유저 정보
  const [userInfo, setUserInfo] = useState({
    user_realname: '', //이름
    username: '', //아이디
    password: '', //비밀번호
    confirm_password: '', //비밀번호 확인
    birthday: '', //생년월일 8자리
  });

  //생년월일 정보
  const [birthday, setBirthday] = useState('');

  // 아아디, 비밀번호, 비밀번호 확인
  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserInfo(userInfo => ({
      ...userInfo,
      [name]: value,
    }));
  };

  // 페이지 이동
  const navigate = useNavigate();

  // 로그인 페이지 이동
  const goToLogin = () => {
    navigate('/login');
  };

  // 메인 페이지 이동
  const goToHome = () => {
    navigate('/');
  };
  
  // 회원가입 로직
  const processSignUp = () => {
    fetch('여기 url 주소 넣기', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        user_realname: userInfo.user_realname,
        username: userInfo.username,
        password: userInfo.password,
        confirm_password: userInfo.confirm_password,
        birthday: userInfo.birthday,
      }),
    })
    console.log('user_realname:', userInfo.user_realname, 
                'username:', userInfo.username, 
                'password:', userInfo.password,
                'confirm_password:', userInfo.confirm_password,
                'birthday:', userInfo.birthday)

      .then(response => {
        if (response.ok) return response.json();
        throw new Error('서버 응답이 올바르지 않습니다.');
      })
      .then(data => {
        if (data.token) {
          navigate('/login');
        } else {
          alert('회원가입에 실패했습니다. 다시 시도해주세요.');
        }
      })
      .catch(error => {
        alert('오류가 발생했습니다. 다시 시도해주세요.');
      });
  };

  return (
    <>
      <Navbar />
      <div className="signup">
        <div className="write-info" onChange={handleInputChange}>
          <div className="backHome-Btn">
            <button className="backBtn" onClick={goToHome}>뒤로가기</button>
          </div>

          <div className="userInput">
            <UserInput
              type="text"
              placeholder="이름"
              value={userInfo.user_realname}
              name="user_realname"
            />
              <UserInput
                type="text"
              placeholder="아이디"
              value={userInfo.username}
              name="username"
            />
            <UserInput
              type="password"
              placeholder="비밀번호"
              value={userInfo.password}
              name="password"
            />
            <UserInput
              type="password"
              placeholder="비밀번호 확인"
              value={userInfo.confirm_password}
              name="confirm_password"
          />
          <UserInput
            type="birthday"
            placeholder="생년월일"
            pattern="\d{4}\.\d{2}\.\d{2}" // 정규식을 이용하여 형식을 지정
            value={userInfo.birthday}
            name="birthday"
          />
        </div>

        <div className="signUp-Btn">
          <UserButton
            onClick={processSignUp}
            text="회원 가입"
          />
        </div>
        
      </div>
    </div>
  </>
  );
};

export default Signup;