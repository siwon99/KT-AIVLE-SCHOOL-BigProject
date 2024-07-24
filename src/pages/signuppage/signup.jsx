import React, { useCallback, useEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
import "./signup.css"; //권혜민 추가
import { useNavigate } from 'react-router-dom';
import UserInput from '../loginpage/UserInput';
import UserButton from '../loginpage/UserBtn';
import Navbar from '../navbar/navbar';
import SignupModal from '../signupmodal/signupmodal'; // Import the SignupModal component
// import Footer from '../homepage/footer.jsx';

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
  const [passwordValid, setPasswordValid] = useState(false); // 비밀번호 유효성 상태 추가
  const [usernameValid, setUsernameValid] = useState(-1); // 아이디 중복 여부 상태 추가 -1: 글자수 부족
  const [agreementChecked, setAgreementChecked] = useState(false); // 동의 여부 상태
  const [modalOpen, setModalOpen] = useState(true); // 모달 열기/닫기 상태

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
    const regex = /^.{8,20}$/;
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

  useEffect(() => {
    if (!isUsernameValid(userInfo.username)) {
      setUsernameValid(-1)
    }
    else {
      checkUsernameValid(userInfo.username);
    }
  }, [userInfo.username])

  const isUsernameValid = (uname) => {
    if (uname.length < 4)
      return false
    return true
  }
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
  
  const checkUsernameValid = (uname) => {
    fetch(`http://3.39.228.42:8080/users/check-dup?username=${uname}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
    .then(response => response.json())
    .then(data => {
      setUsernameValid(!data.isExist); // 서버에서 받은 데이터로 아이디 중복 여부 상태 업데이트
    })
    .catch(error => {
      console.log(error);
    });
  };

  // 개인정보 약관 동의 확인
  const handleAgreeChange = (isChecked) => {
    setAgreementChecked(isChecked); // 체크박스 상태 업데이트
  };

  const closeAgreementModal = () => {
    setModalOpen(false);
  };

  // 회원가입 로직
  const processSignUp = () => {
    // 아이디 중복 체크
    //checkUsernameValid();

    if (passwordValid && passwordMatch && usernameValid == 1 && agreementChecked){
      fetch('http://3.39.228.42:8080/users/signup/', {
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
      alert ('입력한 정보를 다시 확인하고 필수 동의 사항에 동의해주세요.');
    }
  };

  return (
    <>
      <Navbar />
      <SignupModal
        isOpen={modalOpen}
        onClose={closeAgreementModal}
        onAgreeChange={handleAgreeChange} // 콜백 함수 전달
      />
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
              {usernameValid === true && (
                <p style={{ color: 'green', marginTop: '0px', marginBottom: '10px' }}>
                  사용 가능한 아이디입니다.
                </p>
              )}
              {usernameValid === false && (
                <p style={{ color: 'red', marginTop: '0px', marginBottom: '10px' }}>
                  이미 사용중인 아이디입니다.
                </p>
              )}
              {usernameValid === -1 && (
                <p style={{ color: 'red', marginTop: '0px', marginBottom: '10px' }}>
                  사용 불가능한 아이디입니다.
                </p>
              )}
              <UserInput
                type="password"
                placeholder="비밀번호"
                value={userInfo.password}
                name="password"
                onChange={handleInputChange}
                onEnterPress={processSignUp}
              />
              {/* 비밀번호 유효성 검사 메세지 */}
              {passwordValid ? (
                <p style={{ color: 'green', marginTop: '0px', marginBottom: '10px' }}>
                  안전한 비밀번호입니다.
                </p>
              ) : (
                <p style={{ color: 'red', marginTop: '0px', marginBottom: '10px' }}>
                  비밀번호는 8자 이상 20자 이하로 입력해야 합니다.
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
              {(passwordMatch === false || passwordMatch === null) && "비밀번호가 일치하지 않습니다."}
              {passwordMatch === true && "비밀번호가 일치합니다."}
            </div>
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
    {/* <Footer /> */}
  </>
  );
};

export default Signup;