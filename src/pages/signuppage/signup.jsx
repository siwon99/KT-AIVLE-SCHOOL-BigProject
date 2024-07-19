import React, { useCallback, useEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
import "./signup.css"; //권혜민 추가
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
  const [passwordMatch, setPasswordMatch] = useState(null);
  const [passwordValid, setPasswordValid] = useState(true); // 비밀번호 유효성 상태 추가
  const [usernameExists, setUsernameExists] = useState(false); // 아이디 중복 여부 상태 추가

  // 아아디, 비밀번호, 비밀번호 확인
  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserInfo(userInfo => ({
      ...userInfo,
      [name]: value,
    }));

    // 비밀번호 유효성 검사
    if (name === 'password') {
      setPasswordValid(validatePassword(value));
      // 비밀번호 확인 필드와 일치 여부 검사
      setPasswordMatch(userInfo.confirm_password === value);
    } else if (name === 'confirm_password') {
      setPasswordMatch(userInfo.password === value);
    }
    
  };

  // 비밀번호 유효성 검사 함수
  const validatePassword = password => {
    // 비밀번호 조건: 최소 8자 이상, 대소문자, 숫자, 특수문자 포함
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return regex.test(password);
  };


  useEffect(() => {
    if(userInfo.password && userInfo.confirm_password) {
      if(userInfo.password === userInfo.confirm_password) {
        setPasswordMatch(true);
      } else {
        setPasswordMatch(false);
      }
    } else {
      setPasswordMatch(null);
    }
  }, [userInfo.password, userInfo.confirm_password]);

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

  // 아이디 유효성 검사(중복 여부)
  /*
  const checkUsernameExists = () => {
    fetch(`http://0.00.000.00/users/check-username/${userInfo.username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
    .then(response => response.json())
    .then(data => {
      setUsernameExists(data.exists); // 서버에서 받은 데이터로 아이디 중복 여부 상태 업데이트
    })
    .catch(error => {
      console.error('Error checking username existence:', error);
      setUsernameExists(false); // 오류 발생 시 기본적으로 중복 없음으로 설정
    });
  };
  */

  // 회원가입 로직
  const processSignUp = () => {
    // 아이디 중복 체크
    //checkUsernameExists();

    if (passwordValid && passwordMatch /* && !usernameExists*/){
      fetch('http://3.39.228.42/users/signup/', {
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
      .then(response => {
        if (response.ok) {
          alert('회원가입에 성공했습니다. 로그인 해주세요.');
          navigate('/login')
        } else {
          throw new Error();
        }
      })
      .catch(error => {
        alert('회원가입에 실패했습니다. 다시 해주세요.');
      });
    } else {
      alert ('입력한 정보를 다시 확인해주세요.');
    }
  };

  return (
    <>
      <Navbar />
      <main className="signup-content">
        <div className="signup-title">회원가입</div>
        <div className="signup">
          <div className="write-info" onChange={handleInputChange}>
            <div className="userInput">
              <UserInput
                type="text"
                placeholder="이름"
                value={userInfo.user_realname}
                name="user_realname"
                onChange={handleInputChange}
                onEnterPress={processSignUp}
              />
              <UserInput
                type="birthday"
                placeholder="생년월일 (YYYY.MM.DD)"
                pattern="\d{4}\.\d{2}\.\d{2}"
                value={userInfo.birthday}
                name="birthday"
                onChange={handleInputChange}
                onEnterPress={processSignUp}
              />
              <UserInput
                type="text"
                placeholder="아이디"
                value={userInfo.username}
                name="username"
                onChange={handleInputChange}
                onEnterPress={processSignUp}
              />
              <UserInput
                type="password"
                placeholder="비밀번호"
                value={userInfo.password}
                name="password"
                onChange={handleInputChange}
                onEnterPress={processSignUp}
              />
              {/* 비밀번호 유효성 검사 메세지 */}
              {!passwordValid && (
                <p style={{ color: 'red', marginTop:'0px', marginBottom:'10px' }}>
                  비밀번호는 영어 대소문자, 숫자, 특수문자(@,$,!,%,*,?,&)를 포함하여 8자 이상 20자 이하로 입력해야 합니다.
                </p>
              )}
              

              <UserInput
                type="password"
                placeholder="비밀번호 확인"
                value={userInfo.confirm_password}
                name="confirm_password"
                onChange={handleInputChange}
                onEnterPress={processSignUp}
            />
            
            <div className={`password-message ${passwordMatch === true ? 'password-match' : ''}`}>
              {passwordMatch === false && "비밀번호가 일치하지 않습니다."}
              {passwordMatch === true && "비밀번호가 일치합니다."}
            </div>
          
          {/* 아이디 중복 시 메시지 
            {usernameExists && (
              <p style={{ color: 'red', marginTop:'0px', marginBottom:'10px' }}>
                이미 존재하는 아이디입니다.
              </p>
            )}
          */}
          </div>

          <div className="button-container">
            <div className="backHome-Btn">
                <button className="backBtn" onClick={goToHome}>뒤로가기</button>
              </div>
            <div className="signup-Btn">
              <UserButton
                onClick={processSignUp}
                text="회원 가입"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
  );
};

export default Signup;