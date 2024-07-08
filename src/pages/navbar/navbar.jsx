import React, {useEffect, useState} from "react"; // eslint-disable-line no-unused-vars
import "./navbar.css";
import WhomeIcon from "../../assets/WhomeIcon.svg";
import WlogIn from "../../assets/WlogIn.svg";
import WsignUp from "../../assets/WsignUp.svg";
import WlogOut from "../../assets/WlogOut.svg";

// Navbar 컴포넌트 정의
const Navbar = () => {
  const [token, setToken] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // 메뉴의 열림/닫힘 상태를 관리하는 상태(초기값: false)

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);

    // 화면 크기가 1279px 이상이 되면 사이드바가 닫히는 코드
    const handleResize = () => {
      if (window.innerWidth > 1279) {
        setMenuOpen(false);
      }
    };

    // 새로고침 없이 동적으로 화면 크기가 변경되도록 하는 코드
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 현재 메뉴 상태를 반전시키는 함수
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
            <li className="category"><a href="/land_list">농지 리스트</a></li>
            <li className="category"><a href="/service">서비스 소개</a></li>
            <li className="category"><a href="/member">조원 소개</a></li>
            <li className="category"><a href="/faq">FAQ</a></li>
            <li className="category"><a href="/map">지도</a></li>
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
        <a href="/land_list">농지 리스트</a>
        <a href="/service">서비스 소개</a>
        <a href="/member">조원 소개</a>
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
