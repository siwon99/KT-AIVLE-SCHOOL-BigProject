import React, { useEffect, useState } from "react";
import "./navbar.css";
import WhomeIcon from "/assets/WhomenewIcon.svg";
import WlogIn from "/assets/Wlogin.jpg";
import WlogOut from "/assets/Wlogout.jpg";
import WsignUp from "/assets/Wsignup.jpg";
import WmyPage from "/assets/Wmypage.jpg";

// Navbar 컴포넌트 정의
const Navbar = () => {
  // 토큰 상태와 메뉴 열림 상태 관리
  const [token, setToken] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // 메뉴의 열림/닫힘 상태를 관리하는 상태(초기값: false)

  useEffect(() => {
    // 로컬 스토리지에서 토큰 가져오기
    const token = localStorage.getItem("token");
    setToken(token);

    // 화면 크기 변경 시 사이드바 상태 조정
    const handleResize = () => {
      if (window.innerWidth > 1279) {
        setMenuOpen(false);
        // 특정 요소에서 sidebar-open 클래스 제거
        document.querySelectorAll('.sidebar-open').forEach(el => el.classList.remove('sidebar-open'));
      } else if (menuOpen) {
        // 사이드바 열기
        const elements = [
          '.content', '.list-container', '.listpage', '.info-section',
          '.team-contents', '.faq-container', '.signup-content',
          '.login-container', '.detailpage', '.map-container',
          '.modal-container', '.umypage-container',
          '.amypage-container', '.footer'
        ];
        elements.forEach(selector => {
          document.querySelector(selector)?.classList.add('sidebar-open');
        });
      }
    };

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  // 메뉴 토글 함수
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const elements = [
      '.content', '.list-container', '.listpage', '.info-section',
      '.team-contents', '.faq-container', '.signup-content',
      '.login-container', '.detailpage', '.map-container',
      '.modal-container', '.umypage-container',
      '.amypage-container', '.footer'
    ];
    elements.forEach(selector => {
      document.querySelector(selector)?.classList.toggle('sidebar-open', !menuOpen);
    });
  };

  return (
    <div className="navbar">
      <nav>
        <ul>
          {/* 햄버거 아이콘 */}
          <div className="hamburger-icon" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* 홈 아이콘 */}
          <li className="home-icon">
            <a href="/">
              <img src={WhomeIcon} alt="NongBu" className="whomeicon" />
            </a>
          </li>

          {/* 카테고리 링크 */}
          <div className="categories">
            <li className="category"><a href="/listall">농지 임대</a></li>
            <li className="category"><a href="/service">서비스 소개</a></li>
            <li className="category"><a href="/teamInfo">조원 소개</a></li>
            <li className="category"><a href="/faq">FAQ</a></li>
            <li className="category"><a href="/map">지도</a></li>
          </div>

          {/* 인증 아이콘 */}
          <li className="auth-icons">
            {!token ? (
              <div className="first-icons">
                <a href="/login" className="login-link">
                  <img src={WlogIn} alt="Log In" className="login-icon" />
                  <span>Login</span>
                </a>
                <a href="/signup" className="signup-link">
                  <img src={WsignUp} alt="Sign Up" className="signup-icon" />
                  <span>Signup</span>
                </a>
              </div>
            ) : (
              <div className="second-icons">
                <a href="/mypage" className="mypage-link">
                  <img src={WmyPage} alt="My Page" className="mypage-icon" />
                  <span>Mypage</span>
                </a>
                <a href="/logout" className="logout-link">
                  <img src={WlogOut} alt="Log Out" className="logout-icon" />
                  <span>Logout</span>
                </a>
              </div>
            )}
          </li>
        </ul>
      </nav>
      <div className={`sidebar ${menuOpen ? "show" : ""}`}>
        <div className="spacer"></div>
        <a href="/">홈</a>
        <a href="/listall">농지 임대</a>
        <a href="/service">서비스 소개</a>
        <a href="/teamInfo">조원 소개</a>
        <a href="/faq">FAQ</a>
        <a href="/map">지도</a>
        <div className="auth-links">
          {!token ? (
            <>
              <a href="/login">로그인하세요 &gt;</a>
              <a href="/signup">회원가입하세요 &gt;</a>
            </>
          ) : (
            <>
              <a href="/mypage">마이페이지 &gt;</a>
              <a href="/logout">로그아웃 &gt;</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
