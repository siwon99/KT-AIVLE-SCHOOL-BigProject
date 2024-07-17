import React, {useEffect, useState} from "react";
import "./navbar.css";
import WhomeIcon from "/assets/WhomeIcon.svg";
import WlogIn from "/assets/WlogIn.svg";
import WsignUp from "/assets/WsignUp.svg";
import WlogOut from "/assets/WlogOut.svg";

// Navbar 컴포넌트 정의
const Navbar = () => {
  const [token, setToken] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // 메뉴의 열림/닫힘 상태를 관리하는 상태(초기값: false)

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);

    const handleResize = () => {
      if (window.innerWidth > 1279) {
        setMenuOpen(false);
        document.querySelector('.content')?.classList.remove('sidebar-open');
        document.querySelector('.list-container')?.classList.remove('sidebar-open');
        document.querySelector('.listpage')?.classList.remove('sidebar-open');
        document.querySelector('.service-contents')?.classList.remove('sidebar-open');
        document.querySelector('.team-contents')?.classList.remove('sidebar-open');
        document.querySelector('.faq-container')?.classList.remove('sidebar-open');
        document.querySelector('.signup-content')?.classList.remove('sidebar-open');
        document.querySelector('.login-content')?.classList.remove('sidebar-open');
        document.querySelector('.detailpage')?.classList.remove('sidebar-open');
        document.querySelector('.map-container')?.classList.remove('sidebar-open');
        document.querySelector('.modal-container')?.classList.remove('sidebar-open');
      } else if (menuOpen) {
        document.querySelector('.content')?.classList.add('sidebar-open');
        document.querySelector('.list-container')?.classList.add('sidebar-open');
        document.querySelector('.listpage')?.classList.add('sidebar-open');
        document.querySelector('.service-contents')?.classList.add('sidebar-open');
        document.querySelector('.team-contents')?.classList.add('sidebar-open');
        document.querySelector('.faq-container')?.classList.add('sidebar-open');
        document.querySelector('.signup-content')?.classList.add('sidebar-open');
        document.querySelector('.login-content')?.classList.add('sidebar-open');
        document.querySelector('.detailpage')?.classList.add('sidebar-open');
        document.querySelector('.map-container')?.classList.add('sidebar-open');
        document.querySelector('.modal-container')?.classList.add('sidebar-open');
      }
    };

    // 새로고침 없이 동적으로 화면 크기가 변경되도록 하는 코드
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  // 현재 메뉴 상태를 반전시키는 함수
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.querySelector('.content')?.classList.toggle('sidebar-open', !menuOpen);
    document.querySelector('.list-container')?.classList.toggle('sidebar-open', !menuOpen);  
    document.querySelector('.listpage')?.classList.toggle('sidebar-open', !menuOpen);  
    document.querySelector('.service-contents')?.classList.toggle('sidebar-open', !menuOpen); 
    document.querySelector('.team-contents')?.classList.toggle('sidebar-open', !menuOpen);    
    document.querySelector('.faq-container')?.classList.toggle('sidebar-open', !menuOpen); 
    document.querySelector('.signup-content')?.classList.toggle('sidebar-open', !menuOpen);  
    document.querySelector('.login-content')?.classList.toggle('sidebar-open', !menuOpen); 
    document.querySelector('.detailpage')?.classList.toggle('sidebar-open', !menuOpen); 
    document.querySelector('.map-container')?.classList.toggle('sidebar-open', !menuOpen); 
    document.querySelector('.modal-container')?.classList.toggle('sidebar-open', !menuOpen);   
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

          <li className="home-icon">
            <a href="/">
              <img src={WhomeIcon} alt="NongBu" className="whomeicon" />
            </a>
          </li>

          <div className="categories">
            <li className="category"><a href="/listall">리스트</a></li>
            <li className="category"><a href="/service">서비스 소개</a></li>
            <li className="category"><a href="/teamInfo">조원 소개</a></li>
            <li className="category"><a href="/faq">FAQ</a></li>
            <li className="category"><a href="/map">지도</a></li>
            <li className="mypage"><a href="/mypage">마페</a></li>
          </div>
          
          <li className="auth-icons">
            {!token ? (
                <div>
                  <a href="/login">
                    <img src={WlogIn} alt="Log In" className="login-icon" />
                  </a>
                  <a href="/signup">
                    <img src={WsignUp} alt="SignUp" className="signup-icon" />
                  </a>
                </div>
              ) : (
                <a href="/logout">
                  <img src={WlogOut} alt="Log Out" className="logout-icon" />
                </a>
              )
            }
          </li>
        </ul>
      </nav>
      <div className={`sidebar ${menuOpen ? "show" : ""}`}>
        <a href="/">홈</a>
        <a href="/listall">리스트</a>
        <a href="/service">서비스 소개</a>
        <a href="/teamInfo">조원 소개</a>
        <a href="/faq">FAQ</a>
        <a href="/map">지도</a>
        <div className="auth-links">
          <a href="/login">로그인하세요  &gt;</a>
          <a href="/signup">회원가입하세요  &gt;</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;